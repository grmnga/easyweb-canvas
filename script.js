//    var
//        canv = document.getElementById('canvas'),
//        ctx  = canv.getContext('2d');

function print_logo(ctx) {
    var
        width = window.innerWidth, 
        height = window.innerHeight;
    
    ctx.fillStyle =  "white";
    ctx.fillRect(0, 0, width/2, height );

    ctx.fillStyle =  "white";
    ctx.textAlign = 'center';
    ctx.textBaseline = "middle"

    str = '900 ' + width*0.145 + 'px Arial';
    ctx.font = str;
    x = width*0.354;
    ctx.fillText("WEB", x, height/2);

    ctx.globalCompositeOperation = "xor";
    str = str = '900 ' + width*0.12 + 'px Arial';
    ctx.font = str;
    x = width*0.359;
    ctx.fillText("WEB", x, height/2);

    ctx.textAlign = "center";
    x = width*0.192;
    y = height*0.48;
    ctx.translate(x, y);
    ctx.rotate(-Math.PI/2);
//    ctx.textAlign = "center";
    str = str = '900 ' + width*0.035 + 'px Arial';
    ctx.font = str;
    ctx.translate(0, 0);
    ctx.fillText("easy", 0, 0);
}
        
function draw() {
    var
        canv = document.getElementById('canvas'),
        ctx = canv.getContext('2d');
    canv.width = window.innerWidth;
    canv.height = window.innerHeight;
    ctx.clearRect(0, 0, canv.width, canv.height);
    print_logo(ctx);

    var
        c = document.getElementById('c');
    var w = c.width = window.innerWidth,
        h = c.height = window.innerHeight,
        ctx = c.getContext('2d'),

        //parameters
        total = w,
        accelleration = .05,

        //afterinitial calculations
        size = w / total,
        occupation = w / total,
        repaintColor = 'rgba(0, 0, 0, .04)'
    colors = [],
        dots = [],
        dotsVel = [];

    //setting the colors' hue
    //and y level for all dots
    var portion = 360 / total;
    for (var i = 0; i < total; ++i) {
        colors[i] = portion * i;

        dots[i] = h;
        dotsVel[i] = 10;
    }

    function anim() {
        window.requestAnimationFrame(anim);

        ctx.fillStyle = repaintColor;
        ctx.fillRect(0, 0, w, h);

        for (var i = 0; i < total; ++i) {
            var currentY = dots[i] - 1;
            dots[i] += dotsVel[i] += accelleration;
            
            ctx.fillStyle = 'hsl(' + colors[i] + ', 80%, 50%)';
            ctx.fillRect(occupation * i, currentY, size, dotsVel[i] + 1);

            if (dots[i] > h && Math.random() < .01) {
                dots[i] = dotsVel[i] = 0;
            }
        }
    }

    anim();
}

window.onresize = function () {
    draw();
}

draw();