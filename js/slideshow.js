﻿function SlideShow(_c,slideContainer,slidesImgs,slideBar) {
    var a = $(slideContainer),
        h = $(slideBar),
        c = _c || 3000,
        e = 0,
        lastI = 0,
        j, m;
    var slidersImg=$(slidesImgs);
    var f = slidersImg.find("li");
    var d = f.length;
    var n = h.find("li");

    function b() {
        m = setInterval(function() {
            e = e + 1 >= d ? e + 1 - d : e + 1;
            g();
        }, c);
    }

    function k() {
        clearInterval(m);
    }

    function g() {
        f[lastI].style.display = "none";
        n[lastI].className = "";
        f[e].style.display = "block";
        n[e].className = "on";
        lastI = e;
    }
    f[e].style.display = "block";
    a.onmouseover = k;
    a.onmouseout = b;
    h.onmouseover = function(i) {
        j = i ? i.target : window.event.srcElement;
        if (j.nodeName === "LI") {
            e = parseInt(j.value, 10) - 1;
            g();
        }
    };
    b();
}
