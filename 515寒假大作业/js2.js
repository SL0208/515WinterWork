var timer = null;

function startMove1(obj, iTarget, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var iSpeed = 0;
        var iSpeed = (Math.abs(oDivMain.offsetTop) - iTarget) / 4
        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
        if (obj.offsetTop == -iTarget) {
            clearInterval(obj.timer);
            fn();
        } else {
            obj.style.top = obj.offsetTop + iSpeed + 'px';
        }
    }, 30);

}
// 滚轮事件
windowAddMouseWheel();

function windowAddMouseWheel() {
    var scrollFunc = function (e) {
        e = e || window.event;
        var i = 0;
        if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > 0) { //当滑轮向上滚动时

            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
                startMove1(oDivMain, offsetTop + viewheight);


            }
        }
    };
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) { //火狐使用DOMMouseScroll绑定
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //其他浏览器直接绑定滚动事件
    window.onmousewheel = document.onmousewheel = scrollFunc;
}


function startMove3(obj, iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var iSpeed = 0;
        if (obj.offsetWidth < iTarget) {
            iSpeed = 5;
        } else {
            iSpeed = -5;
        }
        if (obj.offsetWidth >= iTarget) {
            clearInterval(obj.timer);

        } else {
            obj.style.width = obj.offsetWidth + iSpeed + 'px';
        }
    }, 30);
}

function startMove4(obj, iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var iSpeed = 0;
        if (obj.offsetHeight < iTarget) {
            iSpeed = 5;
        } else {
            iSpeed = -5;
        }
        if (obj.offsetHeight >= iTarget) {
            clearInterval(obj.timer);

        } else {
            obj.style.height = obj.offsetHeight + iSpeed + 'px';
        }
    }, 30);
}

function startMove5(obj, iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var iSpeed = 0;
        if (obj.offsetTop < iTarget) {
            iSpeed = 5;
        } else {
            iSpeed = -5;
        }
        if (obj.offsetTop >= iTarget) {
            clearInterval(obj.timer);

        } else {
            obj.style.top = obj.offsetTop + iSpeed + 'px';
        }
    }, 30);
}







//鼠标移在左侧图片上时的变化
oD_bcg1.onmouseover = function () {
    clearInterval(page3TimerLeft);
    page3TimerLeft = setInterval(function () {
        var iSpeed = Math.ceil(1000 - oD_bcg1.offsetWidth) / 100;
        if (oBcg1.offsetWidth >= 1000) {
            clearInterval(page3TimerLeft);
        } else {
            oBcg1.style.width = oBcg1.offsetWidth + 20 * iSpeed + 'px';
            oBcg1.style.height = oBcg1.offsetHeight + 20 * iSpeed + 'px';
            oBcg1.style.top = oBcg1.offsetTop + 20 * iSpeed + 'px';
            oLeft.style.height = oLeft.offsetHeight - 5 * iSpeed + 'px';


        }
    }, 30);
}
//鼠标放在左侧水滴上时的变化
oLeft.onmouseover = function () {
    oBtn_left.style.backgroundColor = "white";
    oBtn_left.style.color = "#f39e38";
}
//鼠标移出左侧图片时的变化
oD_bcg1.onmouseout = function () {
    clearInterval(page3TimerLeft);
    page3TimerLeft = setInterval(function () {
        var iSpeed = Math.ceil(1000 - oD_bcg1.offsetWidth) / 100;
        if (oBcg1.offsetWidth <= 925) {
            clearInterval(page3TimerLeft);
        } else {
            oBcg1.style.width = oBcg1.offsetWidth - 20 * iSpeed + 'px';
            oBcg1.style.height = oBcg1.offsetHeight - 20 * iSpeed + 'px';
            oBcg1.style.top = oBcg1.offsetTop - 20 * iSpeed + 'px';
            oLeft.style.height = oLeft.offsetHeight + 5 * iSpeed + 'px';


        }
    }, 30);
}
//鼠标移出左侧水滴时的变化
oLeft.onmouseout = function () {
    oBtn_left.style.backgroundColor = "#f39e38";
    oBtn_left.style.color = "white";
}
//鼠标移在右侧图片上时的变化
var page3TimerRight = null;
oD_bcg2.onmouseover = function () {
    clearInterval(page3TimerRight);
    page3TimerRight = setInterval(function () {
        var iSpeed = Math.ceil(600 - oD_bcg2.offsetWidth) / 50;
        if (oBcg2.offsetWidth >= 600) {
            clearInterval(page3TimerRight);
        } else {
            oBcg2.style.width = oBcg2.offsetWidth + 5 * iSpeed + 'px';
            oBcg2.style.height = oBcg2.offsetHeight + 5 * iSpeed + 'px';
            // oBcg2.style.top = oBcg2.offsetTop + 10 * iSpeed + 'px';
            oRight.style.height = oRight.offsetHeight - 2 * iSpeed + 'px';


        }
    }, 30);
}
//鼠标放在右侧水滴上时的变化
oRight.onmouseover = function () {
    oBtn_right.style.backgroundColor = "white";
    oBtn_right.style.color = "#eb6b64";
}
//鼠标移出右侧图片上时的变化
var page3TimerRight = null;
oD_bcg2.onmouseout = function () {
    clearInterval(page3TimerRight);
    page3TimerRight = setInterval(function () {
        var iSpeed = Math.ceil(600 - oD_bcg2.offsetWidth) / 50;
        if (oBcg2.offsetWidth <= 500) {
            clearInterval(page3TimerRight);
        } else {
            oBcg2.style.width = oBcg2.offsetWidth - 5 * iSpeed + 'px';
            oBcg2.style.height = oBcg2.offsetHeight - 5 * iSpeed + 'px';
            oRight.style.height = oRight.offsetHeight + 2 * iSpeed + 'px';


        }
    }, 30);
}
//鼠标移出右侧水滴上时的变化
oRight.onmouseover = function () {
    oBtn_right.style.backgroundColor = "#eb6b64";
    oBtn_right.style.color = "white";
}


var oDivMain1 = document.getElementById("divMain1")
var oDivMain2= document.getElementById("divMain2")
var oDivMain3 = document.getElementById("divMain3")
var oDivMain4 = document.getElementById("divMain4")
var oDivMain5 = document.getElementById("divMain5")
var oDivMain6 = document.getElementById("divMain6")

function getStyle(obj, name) {
    if (obj.currentStyle) //支持currentstyle
    {
        return obj.currentStyle[name];
    } else //不支持currentstyle
    {
        return getComputedStyle(obj, false)[name];
    }
}

function movement(obj, attr, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(
        function () {
            var cur = parseInt(getStyle(obj, attr));
            if (cur == target) {
                clearInterval(obj.timer);
            } else {
                var iSpeed = (target - cur) / 8;
                iSpeed = (iSpeed > 0) ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                obj.style[attr] = (cur + iSpeed) + 'px';
            }
        }, 1)
}
movement(oDivMain1, 'top', oDivMain1.offsetTop + newheight);
movement(oDivMain2, 'top', oDivMain1.offsetTop + newheight);
movement(oDivMain3, 'top', oDivMain1.offsetTop + newheight);
movement(oDivMain4, 'top', oDivMain1.offsetTop + newheight);
movement(oDivMain5, 'top', oDivMain1.offsetTop + newheight);
movement(oDivMain6, 'top', oDivMain1.offsetTop + newheight);