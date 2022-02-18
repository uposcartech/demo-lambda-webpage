export default /*html*/ (slot) => `
<!DOCTYPE html>
<html lang="en" class="h-100">

<head>
    <meta charset="utf-8" />
    <title>Preons docs</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&amp;family=Martel:wght@200;300;400;600;700;800;900&amp;family=Roboto+Mono:wght@100;300;400;500;700&amp;display=swap" />
    <link href="https://unpkg.com/preons/dist/reset.css" rel="stylesheet" type="text/css" />
    <link href="https://unpkg.com/preons/dist/preons.css" rel="stylesheet" type="text/css" />
    <script src="https://unpkg.com/vue@3"></script>
</head>

<body class="bg-light">
    <header class="pa2 d-fl jc-between ai-center">
        <div class="ff-josefin bg-light-m neutrald">
            Lincoln Dashboard
        </div>
        <div class="ml-au mr2">
            Logged in:
            <%= it.verifiedPayload.userUuid %>
        </div>
        <!-- Logout button -->
        <div id="userfront-adrrbo"></div>
    </header>

    <section class="pa2 pt0">

        <div class="">Posts</div>

        ${slot}

        <ul>

        </ul>
    </section>

    <script id="Userfront-script">
        (function(m, o, d, u, l, a, r, i, z, e) {
            u[m] = {
                rq: [],
                ready: function(j) {
                    u[m].rq.push(j);
                },
                m: m,
                o: o,
                d: d,
                r: r
            };

            function j(s) {
                return encodeURIComponent(btoa(s));
            }
            z = l.getElementById(m + "-" + a);
            r = u.location;
            e = [d + "/page/" + o + "/" + j(r.pathname) + "/" + j(r.host) + "?t=" + Date.now(), d];
            e.map(function(w) {
                i = l.createElement(a);
                i.defer = 1;
                i.src = w;
                z.parentNode.insertBefore(i, z);
            });
            u.amvartem = m;
        })("Userfront", "xbr7r8xn", "https://cdn.userfront.com/toolkit", window, document, "script");
    </script>

    <script>
        Vue.createApp({
            data() {
                return {
                    message: 'Hello Vue!'
                }
            }
        }).mount('#app')
    </script>

</body>

</html>
`;