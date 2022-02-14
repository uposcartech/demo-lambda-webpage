export default `
<!DOCTYPE html>
<html lang="en" class="h-100">

<head>
    <meta charset="utf-8" />
    <title>Preons docs</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&amp;family=Martel:wght@200;300;400;600;700;800;900&amp;family=Roboto+Mono:wght@100;300;400;500;700&amp;display=swap" />
    <link href="https://unpkg.com/preons/dist/reset.css" rel="stylesheet" type="text/css" />
    <link href="https://unpkg.com/preons/dist/preons.css" rel="stylesheet" type="text/css" />
</head>

<body class="bg-light h-100 d-fl ai-center jc-center">
    <div class="ff-josefin bg-light-m neutrald">
        <div class="mb2 center">
            Lincoln
        </div>
        <!-- Login form -->
        <div id="userfront-dnddal"></div>
        <div class="mt2 center">
            <a href="/">Sign up</a>
        </div>
    </div>

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
</body>

</html>
`;