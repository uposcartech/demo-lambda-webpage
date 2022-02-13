export default `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Preons docs</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&amp;family=Martel:wght@200;300;400;600;700;800;900&amp;family=Roboto+Mono:wght@100;300;400;500;700&amp;display=swap" />
    <link href="https://unpkg.com/preons/dist/reset.css" rel="stylesheet" type="text/css" />
    <link href="https://unpkg.com/preons@0.3.43/dist/preons.css" rel="stylesheet" type="text/css" />
</head>

<body class="bg-light">
    <div class="ff-josefin bg-light-m neutrald">
        <!-- header -->
        <div class="bg-neutrall bg-transparent-m pa1 df items-center justify-between z-1 relative maxw-xxxsuper-m ml-au-m mr-au-m">
            <div class="dn-m">
                <span class="h-wire w1 bg-neutrald db  mb-xxxsmall"></span>
                <span class="h-wire w1 bg-neutrald db mb-xxxsmall"></span>
                <span class="h-wire w1 bg-neutrald db"></span>
            </div>
            <h1 class="fwb tfu">
                SST wear
            </h1>
            <div class="dn-m">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="neutrald" width="20px" height="20px">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
            </div>
            <div class="items-center dn df-m bca-neutrall bwa1 bsa-solid pl1 pa-xxsmall maxw-xxbig w-100 bra2">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="#302a61"
                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
                <input class="ml1 w-100 fs0 neutrald bca-transparent bg-transparent" type="text" placeholder="Search items..." />
            </div>
            <div class="dn dib-m">
                <div class="dib mr2">Sign in</div>
                <button class="bra2 bg-neutrald pa-xsmall pl2 pr2 bca-transparent light">
                    Join
                </button>
            </div>
        </div>
        <!-- nav -->
        <div class="dn db-m bwb1-m bca-grey-m bsa-solid-m">
            <div class="bg-neutrald light center h-100vh fixed w-100 t0 pt4 relative-m bg-light-m h-au-m neutrald-m pt0-m maxw-xxxsuper-m ml-au-m mr-au-m">
                <ul class="df-m justify-center-m tfu">
                    <li>
                        <a class="dib pa2 pt1 pb1 light tdx neutrald-m" href="">Ideas</a>
                    </li>
                    <li>
                        <a class="dib pa2 pt1 pb1 light tdx neutrald-m" href="">Shoes</a>
                    </li>
                    <li>
                        <a class="dib pa2 pt1 pb1 light tdx neutrald-m" href="">Clothes</a>
                    </li>
                    <li>
                        <a class="dib pa2 pt1 pb1 light tdx neutrald-m" href="">Accessories</a>
                    </li>
                    <li>
                        <a class="dib pa2 pt1 pb1 light tdx neutrald-m" href="">Stores</a>
                    </li>
                    <li>
                        <a class="dib pa2 pt1 pb1 light tdx neutrald-m dn-m dib-l" href="">Contact us</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="relative bg-light">
        <div class="df-m justify-start ff-josefin">
            <div class="relative w-50-m">
                <img src="https://images.unsplash.com/photo-1567108446473-7c63eb5645c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" class="relative w-100 h-100-m of-cover-m l0-m t0-m absolute-m" />
                <div class="bg-neutrall absolute l0 t0 h-100 w-100 o-30"></div>
            </div>
            <div class="maxw-xxxsuper ml-au mr-au relative pa2 pt5-m pb5-m w-50-m pl4-m pl6-l pt8-l pb8-l mr0-l ml0-l">
                <p class="fs0 lh0 tfu mb1 mb2-l neutral">
                    <%= it.time %>
                </p>
                <h1 class="fwb fs2 lh2 mb1 maxw-super fs4-l lh4-l maxw-super-l mb2-l neutrald">
                    Quality materials, clean lines and great designs.
                </h1>
                <button class="bg-neutrald fwb pa1 pl3 pr3 bra4 bca-transparent white">
                    Join
                </button>
            </div>
        </div>
    </div>
    <div class="bg-neutrall pt1 pb1 ff-martel fs-1 dark">
        <ul class="df-m maxw-xxxsuper ml-au mr-au pl1 pr1">
            <li class="mr1 w-4-12-m mb2 mb0-m relative">
                <div class=" relative h-xbig">
                    <img class="w-100 absolute h-100 l0 t0 of-cover" src="https://images.unsplash.com/photo-1444412667101-4eccfdeeff07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" />
                    <span class="bg-dark absolute t0 l0 h-100 w-100 o-30"></span>
                </div>
                <p class="fs0 absolute light tfu t-50 l-50 fwb ff-josefin tr-translate-50n center">Dresses</p>
            </li>
            <li class="mr1 mb2 w-4-12-m  mb0-m relative">
                <div class=" relative h-xbig">
                    <img class="w-100 absolute h-100 l0 t0 of-cover" src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2252&q=80" />
                    <span class="bg-dark absolute t0 l0 h-100 w-100 o-30"></span>
                </div>
                <p class="fs0 absolute light tfu t-50 l-50 fwb ff-josefin tr-translate-50n center">Bags</p>
            </li>
            <li class=" mb2 w-4-12-m  mb0-m relative">
                <div class=" relative h-xbig">
                    <img class="w-100 absolute h-100 l0 t0 of-cover" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" />
                    <span class="bg-dark absolute t0 l0 h-100 w-100 o-30"></span>
                </div>
                <p class="fs0 absolute light tfu t-50 l-50 fwb ff-josefin tr-translate-50n center">Accessories</p>
            </li>
        </ul>
    </div>
    <div class="relative bg-light pa2 ff-josefin hidden w-100">
        <img src="https://d2l08bdqaswlm0.cloudfront.net/B76cJ57zw/2020/06/revenue-graph-colour.svg" class="absolute h-au l-30" style="transform: rotate(-10deg) translate(-50%, -20%);" width="600" />

        <div class="maxw-xxxsuper ml-au mr-au relative z-1">
            <div class="maxw-50-m ml-au">
                <div class="mb1 df justify-between">
                    <div class="bg-neutrall pa1 mr-xsmall w-50 minw0">
                        <input type="text" class="lh0 fs0 bg-transparent bwa0 neutrald" placeholder="First name" />
                    </div>
                    <div class="bg-neutrall pa1 ml-xsmall w-50 minw0">
                        <input type="text" class="w-100 lh0 fs0 bg-transparent bwa0 neutrald" placeholder="Last name" />
                    </div>
                </div>
                <div class="mb1">
                    <div class="bg-neutrall pa1 w-100">
                        <input type="email" class="w-100 lh0 fs0 bg-transparent bwa0 neutrald" placeholder="Enter email..." />
                    </div>
                </div>
                <p class="right">
                    <a href="" class="dib ff-josefin tdx pa1 pl3 pr3 active bg-neutral tfu ls1 bra5 lh0 fs0">
                        Read the docs
                    </a>
                </p>
            </div>
        </div>
    </div>
    <div class="bg-neutral">
        <div class="maxw-xxxsuper ml-au mr-au pt1 pb1 df wrap ff-josefin pt4-m pb4-m">
            <div class="dn db-m fwb pa1 pt0 fs2-m w-4-12-m actived">Preons</div>
            <ul class="mb1 w-50 pa1 w-4-12-m">
                <li class="mb1">
                    <a class="actived fwb tdx" href="">Preons</a>
                </li>
                <li class="mb1">
                    <a class="light tdx" href="">Careers</a>
                </li>
                <li class="mb1">
                    <a class="light tdx" href="">Contact us</a>
                </li>
                <li class="mb1">
                    <a class="light tdx" href="">Roadmap </a>
                </li>
                <li class="mb1">
                    <a class="light tdx" href="">Blog</a>
                </li>
                <li class="mb1">
                    <a class="light tdx" href="">Customers</a>
                </li>
            </ul>
            <ul class="mb1 w-50 pa1 w-4-12-m">
                <li class="mb1">
                    <a class="actived fwb tdx" href="">Features</a>
                </li>
                <li class="mb1">
                    <a class="light tdx" href="">Components</a>
                </li>
                <li class="mb1">
                    <a class="light tdx" href="">UI library</a>
                </li>
                <li class="mb1">
                    <a class="light tdx" href="">Themes</a>
                </li>
                <li class="mb1">
                    <a class="light tdx" href="">CLI</a>
                </li>
                <li class="mb1">
                    <a class="light tdx" href="">Docs generator</a>
                </li>
            </ul>
        </div>
    </div>
</body>

</html>
`;