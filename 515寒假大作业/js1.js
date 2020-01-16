window.onload = function () {

    // 获取可视宽高
    var viewwidth = window.innerWidth;
    var viewheight = window.innerHeight;

    var oDivMain1 = document.getElementById('divMain1');
    var oDivMain2 = document.getElementById('divMain2');
    var oDivMain3 = document.getElementById('divMain3');
    var oDivMain4 = document.getElementById('divMain4');
    var oDivMain5 = document.getElementById('divMain5');
    var oDivMain6 = document.getElementById('divMain6');

    var oImg1_1 = document.getElementById("img1_1")
    var oImg1_2 = document.getElementById("img1_2")
    var oImg1_3 = document.getElementById("img1_3")
    var oImg1_4 = document.getElementById("img1_4")
    var oImg1_5 = document.getElementById("img1_5")
    var oImg1_6 = document.getElementById("img1_6")

    var oImgbutton1 = document.getElementById('imgbutton1');
    var oImgbutton2 = document.getElementById('imgbutton2');
    var oImgbutton3 = document.getElementById('imgbutton3');
    var oImgbutton4 = document.getElementById('imgbutton4');
    var oImgbutton5 = document.getElementById('imgbutton5');
    var oImgbutton6 = document.getElementById('imgbutton6');

    oImg1_1.style.width = viewwidth + 'px';
    oImg1_2.style.width = viewwidth + 'px';
    oImg1_3.style.width = viewwidth + 'px';
    oImg1_4.style.width = viewwidth + 'px';
    oImg1_5.style.width = viewwidth + 'px';
    oImg1_6.style.width = viewwidth + 'px';

    oDivMain1.style.height = viewheight + 'px';
    oDivMain2.style.height = viewheight + 'px';
    oDivMain3.style.height = viewheight + 'px';
    oDivMain4.style.height = viewheight + 'px';
    oDivMain5.style.height = viewheight + 'px';
    oDivMain6.style.height = viewheight + 'px';
    oImg1_1.style.height = viewheight + 'px';
    oImg1_2.style.height = viewheight + 'px';
    oImg1_3.style.height = viewheight + 'px';
    oImg1_4.style.height = viewheight + 'px';
    oImg1_5.style.height = viewheight + 'px';
    oImg1_6.style.height = viewheight + 'px';
    //左侧定时器
    var timer = null;

    function startMove(obj, iTarget, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var iSpeed = 0;

            if (obj.offsetLeft < iTarget) {
                iSpeed = 10;
            } else {
                iSpeed = -10;
            }
            if (obj.offsetLeft == iTarget) {
                clearInterval(obj.timer);
                fn();
            } else {
                obj.style.left = obj.offsetLeft + iSpeed + 'px';
            }
        }, 30);
    }

    //左侧选项卡
    //第二个
    var oDiv_xxk1 = document.getElementById("xxk1")
    var oDiv_hide1 = this.document.getElementById("div_hide1")
    var oDiv_xxk2 = this.document.getElementById("xxk2")
    var oDivLogo = this.document.getElementById("divLogo")
    var oDiv_hide2 = document.getElementById("div_hide2")
    var oDiv_xxk3 = document.getElementById("xxk3")
    var oDiv_hide3 = this.document.getElementById("div_hide3")
    var oDiv_xxk4 = this.document.getElementById("xxk4")
    var oDiv_hide4 = this.document.getElementById("div_hide4")
    var oDiv_xxk5 = this.document.getElementById("xxk5")

    oDiv_xxk2.onmouseover = function () {
        startMove(oDiv_hide1, 90);
        oDivLogo.style.backgroundColor = '#f39e38';
        document.getElementById("guanyumengniu1").src = "img/左侧选项卡/关于蒙牛2.png";
    };

    oDiv_xxk2.onmouseout = function () {
        startMove(oDiv_hide1, 0);
        oDivLogo.style.backgroundColor = 'rgb(9, 160, 9)';
        document.getElementById("guanyumengniu1").src = "img/左侧选项卡/关于蒙牛1.png";
    }
    document.getElementById('ul_1').onmouseover = function () {
        startMove(oDiv_hide1, 90);
        oDivLogo.style.backgroundColor = '#f39e38';
        document.getElementById("guanyumengniu1").src = "img/左侧选项卡/关于蒙牛2.png";
    }
    document.getElementById('ul_1').onmouseout = function () {
        startMove(oDiv_hide1, 0);
        oDivLogo.style.backgroundColor = 'rgb(9, 160, 9)';
        document.getElementById("guanyumengniu1").src = "img/左侧选项卡/关于蒙牛1.png";
    }

    // 第三个
    oDiv_xxk3.onmouseover = function () {
        startMove(oDiv_hide2, 90);
        oDivLogo.style.backgroundColor = '#eb6b64';
        document.getElementById("pinpaiyuchanpin1").src = "img/左侧选项卡/品牌与产品2.png";

    }
    oDiv_xxk3.onmouseout = function () {
        startMove(oDiv_hide2, 0);
        oDivLogo.style.backgroundColor = 'rgb(9, 160, 9)';
        document.getElementById("pinpaiyuchanpin1").src = "img/左侧选项卡/品牌与产品1.png";

    }
    document.getElementById('ul_2').onmouseover = function () {
        startMove(oDiv_hide2, 90);
        oDivLogo.style.backgroundColor = '#eb6b64';
        document.getElementById("pinpaiyuchanpin1").src = "img/左侧选项卡/品牌与产品2.png";
    }
    document.getElementById('ul_2').onmouseout = function () {
        startMove(oDiv_hide2, 0);
        oDivLogo.style.backgroundColor = 'rgb(9, 160, 9)';
        document.getElementById("pinpaiyuchanpin1").src = "img/左侧选项卡/品牌与产品1.png";
    }


    //第四个
    oDiv_xxk4.onmouseover = function () {
        startMove(oDiv_hide3, 90);
        oDivLogo.style.backgroundColor = '#71bde4';
        document.getElementById("kechixufazhan1").src = "img/左侧选项卡/可持续发展2.png";

    }
    oDiv_xxk4.onmouseout = function () {
        startMove(oDiv_hide3, 0);
        oDivLogo.style.backgroundColor = 'rgb(9, 160, 9)';
        document.getElementById("kechixufazhan1").src = "img/左侧选项卡/可持续发展1.png";
    }
    document.getElementById('ul_3').onmouseover = function () {
        startMove(oDiv_hide3, 90);
        oDivLogo.style.backgroundColor = '#71bde4';
        document.getElementById("kechixufazhan1").src = "img/左侧选项卡/可持续发展2.png";
    }
    document.getElementById('ul_3').onmouseout = function () {
        startMove(oDiv_hide3, 0);
        oDivLogo.style.backgroundColor = 'rgb(9, 160, 9)';
        document.getElementById("kechixufazhan1").src = "img/左侧选项卡/可持续发展1.png";
    }


    //第五个
    oDiv_xxk5.onmouseover = function () {
        startMove(oDiv_hide4, 90);
        oDivLogo.style.backgroundColor = '#26a13a';
        document.getElementById("xinwenyuhuodong1").src = "img/左侧选项卡/新闻与活动2.png";

    }
    oDiv_xxk5.onmouseout = function () {
        startMove(oDiv_hide4, 0);
        oDivLogo.style.backgroundColor = 'rgb(9, 160, 9)';
        document.getElementById("xinwenyuhuodong1").src = "img/左侧选项卡/新闻与活动1.png";
    }
    document.getElementById('ul_4').onmouseover = function () {
        startMove(oDiv_hide4, 90);
        oDivLogo.style.backgroundColor = '#26a13a';
        document.getElementById("xinwenyuhuodong1").src = "img/左侧选项卡/新闻与活动2.png";
    }
    document.getElementById('ul_4').onmouseout = function () {
        startMove(oDiv_hide4, 0);
        oDivLogo.style.backgroundColor = 'rgb(9, 160, 9)';
        document.getElementById("xinwenyuhuodong1").src = "img/左侧选项卡/新闻与活动1.png";
    }
    //第六个
    var oDiv_xxk6 = document.getElementById("xxk6")
    oDiv_xxk6.onmouseover = function () {

        document.getElementById("zhaobiao1").src = "img/左侧选项卡/招标公告公示2.png";
    }
    oDiv_xxk6.onmouseout = function () {

        document.getElementById("zhaobiao1").src = "img/左侧选项卡/招标公告公示1.png";
    }

    oDiv_xxk1.onmouseover = function () {

        document.getElementById("shouye1").src = "img/左侧选项卡/首页3.png";
    }
    oDiv_xxk1.onmouseout = function () {

        document.getElementById("shouye1").src = "img/左侧选项卡/首页2.png";
    }
    //轮播图
    var oDivMain = document.getElementById("divMain")
    var oMyChange1 = document.getElementById("myChange1")
    var oMyChange2 = document.getElementById("myChange2")
    var oMyChange3 = document.getElementById("myChange3")
    var oMyChange4 = document.getElementById("myChange4")
    var oMyChange5 = document.getElementById("myChange5")
    var oMyChange6 = document.getElementById("myChange6")



    function startMove1(obj, iTarget) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var iSpeed = 0;
            var iSpeed = (Math.abs(oDivMain.offsetTop) - iTarget) / 4
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (obj.offsetTop == -iTarget) {
                clearInterval(obj.timer);

            } else {
                obj.style.top = obj.offsetTop + iSpeed + 'px';
            }
            if (nowTop == -6 * viewheight) {
                clearInterval(obj.timer);
            }
        }, 30);
    }

    oMyChange2.onclick = function () {
        startMove1(oDivMain, viewheight);
        oImgbutton2.src = "img/fircontent_button1.png";
        oImgbutton1.src = "img/fircontent_button2.png";
        oImgbutton3.src = "img/fircontent_button2.png";
        oImgbutton4.src = "img/fircontent_button2.png";
        oImgbutton5.src = "img/fircontent_button2.png";
        oImgbutton6.src = "img/fircontent_button2.png";
    }
    oMyChange3.onclick = function () {
        startMove1(oDivMain, 2 * viewheight);
        oImgbutton3.src = "img/fircontent_button1.png";
        oImgbutton1.src = "img/fircontent_button2.png";
        oImgbutton2.src = "img/fircontent_button2.png";
        oImgbutton4.src = "img/fircontent_button2.png";
        oImgbutton5.src = "img/fircontent_button2.png";
        oImgbutton6.src = "img/fircontent_button2.png";
    }
    oMyChange4.onclick = function () {
        startMove1(oDivMain, 3 * viewheight);
        oImgbutton4.src = "img/fircontent_button1.png";
        oImgbutton1.src = "img/fircontent_button2.png";
        oImgbutton2.src = "img/fircontent_button2.png";
        oImgbutton3.src = "img/fircontent_button2.png";
        oImgbutton5.src = "img/fircontent_button2.png";
        oImgbutton6.src = "img/fircontent_button2.png";
    }
    oMyChange5.onclick = function () {
        startMove1(oDivMain, 4 * viewheight);
        oImgbutton5.src = "img/fircontent_button1.png";
        oImgbutton1.src = "img/fircontent_button2.png";
        oImgbutton3.src = "img/fircontent_button2.png";
        oImgbutton4.src = "img/fircontent_button2.png";
        oImgbutton2.src = "img/fircontent_button2.png";
        oImgbutton6.src = "img/fircontent_button2.png";
    }
    oMyChange6.onclick = function () {
        startMove1(oDivMain, 5 * viewheight);
        oImgbutton6.src = "img/fircontent_button1.png";
        oImgbutton1.src = "img/fircontent_button2.png";
        oImgbutton3.src = "img/fircontent_button2.png";
        oImgbutton4.src = "img/fircontent_button2.png";
        oImgbutton5.src = "img/fircontent_button2.png";
        oImgbutton2.src = "img/fircontent_button2.png";
    }
    oMyChange1.onclick = function () {
        startMove1(oDivMain, 0);
        oImgbutton1.src = "img/fircontent_button1.png";
        oImgbutton2.src = "img/fircontent_button2.png";
        oImgbutton3.src = "img/fircontent_button2.png";
        oImgbutton4.src = "img/fircontent_button2.png";
        oImgbutton5.src = "img/fircontent_button2.png";
        oImgbutton6.src = "img/fircontent_button2.png";
    }

    // 滚轮事件
    windowAddMouseWheel();

    function windowAddMouseWheel() {
        var scrollFunc = function (e) {
            e = e || window.event;
            if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
                var nowTop = oDivMain.offsetTop - viewheight;
                var nowTop1 = oDivMain.offsetTop + viewheight;
                if (e.wheelDelta > 0) { //当滑轮向上滚动时
                    startMove1(oDivMain, nowTop1);

                }
                if (e.wheelDelta < 0) { //当滑轮向下滚动时
                    startMove1(oDivMain, -nowTop);
                }
            }
        };
        // 
        //给页面绑定滑轮滚动事件
        if (document.addEventListener) { //火狐使用DOMMouseScroll绑定
            document.addEventListener('DOMMouseScroll', scrollFunc, false);
        }
        //其他浏览器直接绑定滚动事件
        window.onmousewheel = document.onmousewheel = scrollFunc;
    }

    //向下滑动需要一下一下滑，不能连着滑，而且滑多了就会出bug，向上滑不了！！！





    //隐藏盒子1
    //第二个
    var oLi1 = this.document.getElementById("liOne")
    oLi1.onmousemove = function () {
        oLi1.style.backgroundColor = '#fdba69';

    }
    oLi1.onmouseout = function () {
        oLi1.style.backgroundColor = '#f39e38';

    }



    var oLi2 = this.document.getElementById("liTwo")
    oLi2.onmousemove = function () {
        oLi2.style.backgroundColor = '#fdba69';
    }
    oLi2.onmouseout = function () {
        oLi2.style.backgroundColor = '#f39e38';
    }


    var oLi3 = this.document.getElementById("liThree")
    oLi3.onmousemove = function () {
        oLi3.style.backgroundColor = '#fdba69';
    }
    oLi3.onmouseout = function () {
        oLi3.style.backgroundColor = '#f39e38';
    }

    var oLi4 = this.document.getElementById("liFour")
    oLi4.onmousemove = function () {
        oLi4.style.backgroundColor = '#fdba69';
    }
    oLi4.onmouseout = function () {
        oLi4.style.backgroundColor = '#f39e38';
    }
    //第三个
    var oLi5 = this.document.getElementById("liFive")
    oLi5.onmousemove = function () {
        oLi5.style.backgroundColor = '#fda39f';
    }
    oLi5.onmouseout = function () {
        oLi5.style.backgroundColor = '#eb6b64';
    }

    var oLi6 = this.document.getElementById("liSix")
    oLi6.onmousemove = function () {
        oLi6.style.backgroundColor = '#fda39f';
    }
    oLi6.onmouseout = function () {
        oLi6.style.backgroundColor = '#eb6b64';
    }

    //第四个
    var oLi7 = this.document.getElementById("liSeven")
    oLi7.onmousemove = function () {
        oLi7.style.backgroundColor = '#a2cadf';
    }
    oLi7.onmouseout = function () {
        oLi7.style.backgroundColor = '#71bde4';
    }

    var oLi8 = this.document.getElementById("liEight")
    oLi8.onmousemove = function () {
        oLi8.style.backgroundColor = '#a2cadf';
    }
    oLi8.onmouseout = function () {
        oLi8.style.backgroundColor = '#71bde4';
    }


    var oLi9 = this.document.getElementById("liNine")
    oLi9.onmousemove = function () {
        oLi9.style.backgroundColor = '#a2cadf';
    }
    oLi9.onmouseout = function () {
        oLi9.style.backgroundColor = '#71bde4';
    }


    var oLi10 = this.document.getElementById("liTen")
    oLi10.onmousemove = function () {
        oLi10.style.backgroundColor = '#a2cadf';
    }
    oLi10.onmouseout = function () {
        oLi10.style.backgroundColor = '#71bde4';
    }

    //第五个
    var oLi11 = this.document.getElementById("liEleven")
    oLi11.onmousemove = function () {
        oLi11.style.backgroundColor = '#8df89f';
    }
    oLi11.onmouseout = function () {
        oLi11.style.backgroundColor = '#26a13a';
    }


    var oLi12 = this.document.getElementById("liTwelve")
    oLi12.onmousemove = function () {
        oLi12.style.backgroundColor = '#8df89f';
    }
    oLi12.onmouseout = function () {
        oLi12.style.backgroundColor = '#26a13a';
    }




    //第六张图底部效果
    var oP1 = document.getElementById("p1")
    var oP2 = document.getElementById("p2")
    var oWeibo = document.getElementById("weibo")
    var oWeixin = document.getElementById("weixin")
    oWeibo.onmousemove = function () {
        oP1.style.color = "white";
        document.getElementById("weibo1").src = "img/weibo2.png";
    }
    oWeibo.onmouseout = function () {
        oP1.style.color = "rgb(160, 158, 158)";
        document.getElementById("weibo1").src = "img/weibo1.png";
    }

    oWeixin.onmousemove = function () {
        oP2.style.color = "white";
        document.getElementById("weixin1").src = "img/weixin2.png";
        document.getElementById("erweima").style.display = "block";
    }
    oWeixin.onmouseout = function () {
        oP2.style.color = "rgb(160, 158, 158)";
        document.getElementById("weixin1").src = "img/weixin1.png";
        document.getElementById("erweima").style.display = "none";

    }

    var oLi_bottom1 = document.getElementById("li_bottom1")
    oLi_bottom1.onmouseover = function () {
        oLi_bottom1.style.color = "white";
    }
    oLi_bottom1.onmouseout = function () {
        oLi_bottom1.style.color = "rgb(160, 158, 158)";
    }


    var oLi_bottom2 = document.getElementById("li_bottom2")
    oLi_bottom2.onmouseover = function () {
        oLi_bottom2.style.color = "white";
    }
    oLi_bottom2.onmouseout = function () {
        oLi_bottom2.style.color = "rgb(160, 158, 158)";
    }



    var oLi_bottom3 = document.getElementById("li_bottom3")
    oLi_bottom3.onmouseover = function () {
        oLi_bottom3.style.color = "white";
    }
    oLi_bottom3.onmouseout = function () {
        oLi_bottom3.style.color = "rgb(160, 158, 158)";
    }



    var oLi_bottom4 = document.getElementById("li_bottom4")
    oLi_bottom4.onmouseover = function () {
        oLi_bottom4.style.color = "white";
    }
    oLi_bottom4.onmouseout = function () {
        oLi_bottom4.style.color = "rgb(160, 158, 158)";
    }

    var oLi_bottom5 = document.getElementById("li_bottom5")
    oLi_bottom5.onmouseover = function () {
        oLi_bottom5.style.color = "white";
    }
    oLi_bottom5.onmouseout = function () {
        oLi_bottom5.style.color = "rgb(160, 158, 158)";
    }


    var oLi_bottom6 = document.getElementById("li_bottom6")
    oLi_bottom6.onmouseover = function () {
        oLi_bottom6.style.color = "white";
    }
    oLi_bottom6.onmouseout = function () {
        oLi_bottom6.style.color = "rgb(160, 158, 158)";
    }


    var oLi_bottom7 = document.getElementById("li_bottom7")
    oLi_bottom7.onmouseover = function () {
        oLi_bottom7.style.color = "white";
    }
    oLi_bottom7.onmouseout = function () {
        oLi_bottom7.style.color = "rgb(160, 158, 158)";
    }
    //



    //选项卡切换页面//
    var oPage1 = document.getElementById("page1")
    var oPage2 = document.getElementById("page2")
    var oPage3 = document.getElementById("page3")
    var oPage4 = document.getElementById("page4")
    var oPage5 = document.getElementById("page5")
    var oPage6 = document.getElementById("page6")


    //点击第二页跳出来的动画效果封装
    function startMove2(obj, iTarget, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var iSpeed = 0;
            var iSpeed = (Math.abs(oDivMain.offsetTop) - iTarget) / 0.05;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (obj.offsetTop <= 190) {
                clearInterval(obj.timer);
                fn();
            } else {
                obj.style.top = obj.offsetTop + iSpeed + 'px';
            }
        }, 30);

    }

    oDiv_xxk1.onclick = function () {
        document.getElementById("div_in1").style.top = 800 + 'px';
        document.getElementById("div_in2").style.top = 850 + 'px';
        document.getElementById("div_in3").style.top = 900 + 'px';
        document.getElementById("div_in4").style.top = 950 + 'px';


        oPage1.style.display = "block";
        oPage2.style.display = "none";
        oPage3.style.display = "none";
        oPage4.style.display = "none";
        oPage5.style.display = "none";
        oPage6.style.display = "none";
        document.getElementById("shouye1").src = "img/左侧选项卡/首页1.png";
        document.getElementById("guanyumengniu1").src = "img/左侧选项卡/关于蒙牛1.png";

        //如果离开的时候在别的图上，再次点击切换到第一张图
        startMove1(oDivMain, 0);
        oImgbutton1.src = "img/fircontent_button1.png";
        oImgbutton2.src = "img/fircontent_button2.png";
        oImgbutton3.src = "img/fircontent_button2.png";
        oImgbutton4.src = "img/fircontent_button2.png";
        oImgbutton5.src = "img/fircontent_button2.png";
        oImgbutton6.src = "img/fircontent_button2.png";

    }



    oDiv_xxk2.onclick = function () {
        startMove2(div_in1, 4);
        startMove2(div_in2, 4);
        startMove2(div_in3, 4);
        startMove2(div_in4, 4);
        oPage2.style.display = "block";
        oPage1.style.display = "none";
        oPage3.style.display = "none";
        oPage4.style.display = "none";
        oPage5.style.display = "none";
        oPage6.style.display = "none";
        document.getElementById("guanyumengniu1").src = "img/左侧选项卡/关于蒙牛3.png";
    }
    oDiv_xxk3.onclick = function () {
        document.getElementById("div_in1").style.top = 800 + 'px';
        document.getElementById("div_in2").style.top = 850 + 'px';
        document.getElementById("div_in3").style.top = 900 + 'px';
        document.getElementById("div_in4").style.top = 950 + 'px';

        oPage3.style.display = "block";
        oPage1.style.display = "none";
        oPage2.style.display = "none";
        oPage4.style.display = "none";
        oPage5.style.display = "none";
        oPage6.style.display = "none";
        document.getElementById("pinpaiyuchanpin1").src = "img/左侧选项卡/品牌与产品3.png";
    }
    oDiv_xxk4.onclick = function () {
        document.getElementById("div_in1").style.top = 800 + 'px';
        document.getElementById("div_in2").style.top = 850 + 'px';
        document.getElementById("div_in3").style.top = 900 + 'px';
        document.getElementById("div_in4").style.top = 950 + 'px';

        oPage4.style.display = "block";
        oPage1.style.display = "none";
        oPage2.style.display = "none";
        oPage3.style.display = "none";
        oPage5.style.display = "none";
        oPage6.style.display = "none";
        document.getElementById("kechixufazhan1").src = "img/左侧选项卡/可持续发展3.png";
    }
    oDiv_xxk5.onclick = function () {
        document.getElementById("div_in1").style.top = 800 + 'px';
        document.getElementById("div_in2").style.top = 850 + 'px';
        document.getElementById("div_in3").style.top = 900 + 'px';
        document.getElementById("div_in4").style.top = 950 + 'px';

        oPage5.style.display = "block";
        oPage1.style.display = "none";
        oPage2.style.display = "none";
        oPage4.style.display = "none";
        oPage3.style.display = "none";
        oPage6.style.display = "none";
        document.getElementById("xinwenyuhuodong1").src = "img/左侧选项卡/新闻与活动3.png";

    }
    oDiv_xxk6.onclick = function () {
        document.getElementById("div_in1").style.top = 800 + 'px';
        document.getElementById("div_in2").style.top = 850 + 'px';
        document.getElementById("div_in3").style.top = 900 + 'px';
        document.getElementById("div_in4").style.top = 950 + 'px';

        oPage6.style.display = "block";
        oPage1.style.display = "none";
        oPage2.style.display = "none";
        oPage4.style.display = "none";
        oPage5.style.display = "none";
        oPage3.style.display = "none";
        document.getElementById("zhaobiao1").src = "img/左侧选项卡/招标公告公示3.png";

    }


    //页面二
    var oDiv_in1 = document.getElementById("div_in1")
    var oDiv_in2 = document.getElementById("div_in2")
    var oDiv_in3 = document.getElementById("div_in3")
    var oDiv_in4 = document.getElementById("div_in4")
    var oImg2_1 = document.getElementById("img2_1")
    var oImg2_2 = document.getElementById("img2_2")
    var oImg2_3 = document.getElementById("img2_3")
    var oImg2_4 = document.getElementById("img2_4")
    var oDiv_in1_1 = document.getElementById("div_in1_1")
    var oDiv_in1_2 = document.getElementById("div_in1_2")
    var oDiv_in1_3 = document.getElementById("div_in1_3")
    var oDiv_in1_4 = document.getElementById("div_in1_4")

    var page2Timer1 = null;
    oDiv_in1.onmouseover = function () {
        clearInterval(page2Timer1);
        page2Timer1 = setInterval(function () {
            var iSpeed = Math.ceil(400 - oDiv_in1.offsetWidth) / 100;
            if (oImg2_1.offsetWidth >= 400) {
                clearInterval(page2Timer1);
            } else {
                oImg2_1.style.width = oImg2_1.offsetWidth + 10 * iSpeed + 'px';
                oImg2_1.style.top = oImg2_1.offsetTop - 10 * iSpeed + 'px';
                oDiv_in1_1.style.width = oDiv_in1_1.offsetWidth + 10 * iSpeed + 'px';
                oDiv_in1_2.style.width = oDiv_in1_2.offsetWidth - 2.5 * iSpeed + 'px';
                oDiv_in1_2.style.left = oDiv_in1_2.offsetLeft + 10 * iSpeed + 'px';
                oImg2_2.style.width = oImg2_2.offsetWidth - 2.5 * iSpeed + 'px';
                oImg2_2.style.left = oImg2_2.offsetLeft + 10 * iSpeed + 'px';

                oDiv_in1_3.style.width = oDiv_in1_3.offsetWidth - 2.5 * iSpeed + 'px';
                oDiv_in1_3.style.left = oDiv_in1_3.offsetLeft + 7.5 * iSpeed + 'px';
                oImg2_3.style.width = oImg2_3.offsetWidth - 2.5 * iSpeed + 'px';
                oImg2_3.style.left = oImg2_3.offsetLeft + 7.5 * iSpeed + 'px';

                oDiv_in1_4.style.width = oDiv_in1_4.offsetWidth - 2.5 * iSpeed + 'px';
                oDiv_in1_4.style.left = oDiv_in1_4.offsetLeft + 5 * iSpeed + 'px';
                oImg2_4.style.width = oImg2_4.offsetWidth - 2.5 * iSpeed + 'px';
                oImg2_4.style.left = oImg2_4.offsetLeft + 5 * iSpeed + 'px';
            }
        }, 30);
    }


    oDiv_in1.onmouseout = function () {
        clearInterval(page2Timer1);
        page2Timer1 = setInterval(function () {
            var iSpeed = Math.ceil(400 - oDiv_in1.offsetWidth) / 100;
            if (oImg2_1.offsetWidth <= 372) {
                clearInterval(page2Timer1);
            } else {
                oImg2_1.style.width = oImg2_1.offsetWidth - 10 * iSpeed + 'px';
                oImg2_1.style.top = oImg2_1.offsetTop + 10 * iSpeed + 'px';
                oDiv_in1_1.style.width = oDiv_in1_1.offsetWidth - 10 * iSpeed + 'px';
                oDiv_in1_2.style.width = oDiv_in1_2.offsetWidth + 2.5 * iSpeed + 'px';
                oDiv_in1_2.style.left = oDiv_in1_2.offsetLeft - 10 * iSpeed + 'px';
                oImg2_2.style.width = oImg2_2.offsetWidth + 2.5 * iSpeed + 'px';
                oImg2_2.style.left = oImg2_2.offsetLeft - 10 * iSpeed + 'px';

                oDiv_in1_3.style.width = oDiv_in1_3.offsetWidth + 2.5 * iSpeed + 'px';
                oDiv_in1_3.style.left = oDiv_in1_3.offsetLeft - 7.5 * iSpeed + 'px';
                oImg2_3.style.width = oImg2_3.offsetWidth + 2.5 * iSpeed + 'px';
                oImg2_3.style.left = oImg2_3.offsetLeft - 7.5 * iSpeed + 'px';

                oDiv_in1_4.style.width = oDiv_in1_4.offsetWidth + 2.5 * iSpeed + 'px';
                oDiv_in1_4.style.left = oDiv_in1_4.offsetLeft - 5 * iSpeed + 'px';
                oImg2_4.style.width = oImg2_4.offsetWidth + 2.5 * iSpeed + 'px';
                oImg2_4.style.left = oImg2_4.offsetLeft - 5 * iSpeed + 'px';
            }
        }, 30);
    }

    //button变色
    oImg2_1.onmouseover = function () {
        document.getElementById("button_in1").style.backgroundColor = "white";
        document.getElementById("button_in1").style.color = "#f39e38";
    }
    oImg2_1.onmouseout = function () {
        document.getElementById("button_in1").style.backgroundColor = "#f39e38";
        document.getElementById("button_in1").style.color = "white";
    }
    oImg2_2.onmouseover = function () {
        document.getElementById("button_in2").style.backgroundColor = "white";
        document.getElementById("button_in2").style.color = "#eb6b64";
    }
    oImg2_2.onmouseout = function () {
        document.getElementById("button_in2").style.backgroundColor = "#eb6b64";
        document.getElementById("button_in2").style.color = "white";
    }
    oImg2_3.onmouseover = function () {
        document.getElementById("button_in3").style.backgroundColor = "white";
        document.getElementById("button_in3").style.color = "#71bde4";
    }
    oImg2_3.onmouseout = function () {
        document.getElementById("button_in3").style.backgroundColor = "#71bde4";
        document.getElementById("button_in3").style.color = "white";
    }
    oImg2_4.onmouseover = function () {
        document.getElementById("button_in4").style.backgroundColor = "white";
        document.getElementById("button_in4").style.color = "#81c043";
    }
    oImg2_4.onmouseout = function () {
        document.getElementById("button_in4").style.backgroundColor = "#81c043";
        document.getElementById("button_in4").style.color = "white";
    }


    //页面三
    var oD_bcg1 = document.getElementById("d_bcg1")
    var oBcg1 = document.getElementById("bcg1")
    var oLeft = document.getElementById("left")
    var oBtn_left = document.getElementById("btn_left")

    var oD_bcg2 = document.getElementById("d_bcg2")
    var oBcg2 = document.getElementById("bcg2")
    var oRight = document.getElementById("right")
    var oBtn_right = document.getElementById("btn_right")
    var page3TimerLeft = null;


    //鼠标移在左侧图片上时的变化
    oD_bcg1.onmouseover = function () {
        clearInterval(page3TimerLeft);
        page3TimerLeft = setInterval(function () {
            var iSpeed = Math.ceil(1000 - oD_bcg1.offsetWidth) / 200;
            if (oBcg1.offsetWidth >= 1000) {
                clearInterval(page3TimerLeft);
            } else {
                oBcg1.style.width = oBcg1.offsetWidth + 20 * iSpeed + 'px';
                oBcg1.style.height = oBcg1.offsetHeight + 20 * iSpeed + 'px';
                oBcg1.style.top = oBcg1.offsetTop - 20 * iSpeed + 'px';
                oBcg1.style.left = oBcg1.offsetLeft - 20 * iSpeed + 'px';
                oLeft.style.height = oLeft.offsetHeight - 8 * iSpeed + 'px';



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
            var iSpeed = Math.ceil(1000 - oD_bcg1.offsetWidth) / 200;
            if (oBcg1.offsetWidth <= 925) {
                clearInterval(page3TimerLeft);
            } else {
                oBcg1.style.width = oBcg1.offsetWidth - 20 * iSpeed + 'px';
                oBcg1.style.height = oBcg1.offsetHeight - 20 * iSpeed + 'px';
                oBcg1.style.top = oBcg1.offsetTop + 20 * iSpeed + 'px';
                oBcg1.style.left = oBcg1.offsetLeft + 20 * iSpeed + 'px';
                oLeft.style.height = oLeft.offsetHeight + 8 * iSpeed + 'px';




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
            var iSpeed = Math.ceil(600 - oD_bcg2.offsetWidth) / 100;
            if (oBcg2.offsetWidth >= 550) {
                clearInterval(page3TimerRight);
            } else {
                oBcg2.style.width = oBcg2.offsetWidth + 5 * iSpeed + 'px';
                oBcg2.style.height = oBcg2.offsetHeight + 5 * iSpeed + 'px';
                oBcg2.style.top = oBcg2.offsetTop - 10 * iSpeed + 'px';
                oBcg2.style.left = oBcg2.offsetLeft - 10 * iSpeed + 'px';
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
            var iSpeed = Math.ceil(600 - oD_bcg2.offsetWidth) / 100;
            if (oBcg2.offsetWidth <= 500) {
                clearInterval(page3TimerRight);
            } else {
                oBcg2.style.width = oBcg2.offsetWidth - 5 * iSpeed + 'px';
                oBcg2.style.height = oBcg2.offsetHeight - 5 * iSpeed + 'px';
                oBcg2.style.top = oBcg2.offsetTop + 10 * iSpeed + 'px';
                oBcg2.style.left = oBcg2.offsetLeft + 10 * iSpeed + 'px';
                oRight.style.height = oRight.offsetHeight + 2 * iSpeed + 'px';


            }
        }, 30);
    }
    //鼠标移出右侧水滴上时的变化
    oRight.onmouseout = function () {
        oBtn_right.style.backgroundColor = "#eb6b64";
        oBtn_right.style.color = "white";
    }

    //页面四手风琴效果
    //函数
    function animate(tag, obj, fn) {
        clearInterval(tag.timer);
        tag.timer = setInterval(function () {

            var flag = true;

            for (var k in obj) {

                if (k == "opacity") {

                    var target = obj[k] * 100;
                    var leader = getStyle(tag, k) * 100 || 0;
                    var step = (target - leader) / 10;


                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    tag.style[k] = leader / 100;

                } else if (k == "zIndex") {
                    tag.style.zIndex = obj[k];
                } else {
                    var target = obj[k];
                    var leader = parseInt(getStyle(tag, k)) || 0;
                    var step = (target - leader) / 10;


                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    tag.style[k] = leader + "px";
                };
                if (leader != target) {
                    flag = false;
                }
            };
            if (flag) {
                clearInterval(tag.timer);
                fn && fn();
            }
        }, 20);
    }

    function getStyle(tag, attr) {
        if (tag.currentStyle) {
            return tag.currentStyle[attr];
        } else {
            return getComputedStyle(tag, null)[attr];
        }
    }


    // 事件
    var box = document.getElementById("box");
    var list = box.children[0];
    var lis = list.children;

    // 操作li设置背景
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.backgroundImage = i;


        lis[i].onmouseover = function () {
            for (var i = 0; i < lis.length; i++) {
                animate(lis[i], {
                    "width": 250
                });
            }
            animate(this, {
                "width": 400
            });
        };

        // 移出时，所有人回到300
        lis[i].onmouseout = function () {
            for (var i = 0; i < lis.length; i++) {
                animate(lis[i], {
                    "width": 300
                });
            }
        };
    }

    //页面五

    var oDiv5_1 = document.getElementById("div5_1")
    var oImg5_1 = document.getElementById("img5_1")
    var oImge5_water1 = document.getElementById("img5_water1")
    var oDiv_water1 = document.getElementById("div_water1")
    var oBtn_top = document.getElementById("btn_top")
    var oDiv5_2 = document.getElementById("div5_2")
    var oImg5_2 = document.getElementById("img5_2")
    var oImge5_water2 = document.getElementById("img5_water2")
    var oDiv_water2 = document.getElementById("div_water2")
    var oBtn_down = document.getElementById("btn_down")
    //鼠标移入上面图片的变化
    var page5TimerTop = null;
    oDiv5_1.onmouseover = function () {
        clearInterval(page5TimerTop);
        page5TimerTop = setInterval(function () {
            var iSpeed = Math.ceil(700 - oImg5_1.offsetHeight) / 200;
            if (oImg5_1.offsetHeight >= 650) {
                clearInterval(page5TimerTop);
            } else {
                oImg5_1.style.height = oImg5_1.offsetHeight + 10 * iSpeed + 'px';
                oImg5_1.style.top = oImg5_1.offsetTop - 5 * iSpeed + 'px';
                oImg5_1.style.width = oImg5_1.offsetWidth + 5 * iSpeed + 'px';
                oImg5_1.style.left = oImg5_1.offsetLeft - 5 * iSpeed + 'px';
                oImge5_water1.style.top = oImge5_water1.offsetTop + 60 * iSpeed + 'px';
                oImge5_water1.style.height = oImge5_water1.offsetHeight - 50 * iSpeed + 'px';
                oDiv_water1.style.top = oDiv_water1.offsetTop + 15 * iSpeed + 'px';

            }
        }, 30);
    }
    //鼠标移出上面图片的变化

    var page5TimerTop = null;
    oDiv5_1.onmouseout = function () {
        clearInterval(page5TimerTop);
        page5TimerTop = setInterval(function () {
            var iSpeed = Math.ceil(700 - oImg5_1.offsetHeight) / 200;
            if (oImg5_1.offsetHeight <= 600) {
                clearInterval(page5TimerTop);
            } else {
                oImg5_1.style.height = oImg5_1.offsetHeight - 10 * iSpeed + 'px';
                oImg5_1.style.top = oImg5_1.offsetTop + 5 * iSpeed + 'px';
                oImg5_1.style.width = oImg5_1.offsetWidth - 5 * iSpeed + 'px';
                oImg5_1.style.left = oImg5_1.offsetLeft + 5 * iSpeed + 'px';
                oImge5_water1.style.top = oImge5_water1.offsetTop - 60 * iSpeed + 'px';
                oImge5_water1.style.height = oImge5_water1.offsetHeight + 50 * iSpeed + 'px';
                oDiv_water1.style.top = oDiv_water1.offsetTop - 15 * iSpeed + 'px';

            }
        }, 30);
    }
    //鼠标移入上面水滴时的变化
    oImge5_water1.onmouseover = function () {
        oBtn_top.style.backgroundColor = "white";
        oBtn_top.style.color = "#eb6b64";
    }
    //鼠标移出上面水滴时的变化
    oImge5_water1.onmouseout = function () {
        oBtn_top.style.backgroundColor = "#eb6b64";
        oBtn_top.style.color = "white";
    }

    //鼠标移入下面图片的变化
    var page5TimerDown = null;
    oDiv5_2.onmouseover = function () {
        clearInterval(page5TimerDown);
        page5TimerDown = setInterval(function () {
            var iSpeed = Math.ceil(500 - oImg5_2.offsetHeight) / 200;
            if (oImg5_2.offsetHeight >= 420) {
                clearInterval(page5TimerDown);
            } else {
                oImg5_2.style.height = oImg5_2.offsetHeight + 10 * iSpeed + 'px';
                oImg5_2.style.top = oImg5_2.offsetTop - 5 * iSpeed + 'px';
                oImg5_2.style.width = oImg5_2.offsetWidth + 5 * iSpeed + 'px';
                oImg5_2.style.left = oImg5_2.offsetLeft - 5 * iSpeed + 'px';
                oImge5_water2.style.top = oImge5_water2.offsetTop + 20 * iSpeed + 'px';
                oImge5_water2.style.height = oImge5_water2.offsetHeight - 20 * iSpeed + 'px';
                oDiv_water2.style.top = oDiv_water2.offsetTop + 5 * iSpeed + 'px';
            }
        }, 30);
    }
    //鼠标移出下面图片的变化
    var page5TimerDown = null;
    oDiv5_2.onmouseout = function () {
        clearInterval(page5TimerDown);
        page5TimerDown = setInterval(function () {
            var iSpeed = Math.ceil(500 - oImg5_2.offsetHeight) / 200;
            if (oImg5_2.offsetHeight <= 385) {
                clearInterval(page5TimerDown);
            } else {
                oImg5_2.style.height = oImg5_2.offsetHeight - 10 * iSpeed + 'px';
                oImg5_2.style.top = oImg5_2.offsetTop + 5 * iSpeed + 'px';
                oImg5_2.style.width = oImg5_2.offsetWidth - 5 * iSpeed + 'px';
                oImg5_2.style.left = oImg5_2.offsetLeft + 5 * iSpeed + 'px';
                oImge5_water2.style.top = oImge5_water2.offsetTop - 20 * iSpeed + 'px';
                oImge5_water2.style.height = oImge5_water2.offsetHeight + 20 * iSpeed + 'px';
                oDiv_water2.style.top = oDiv_water2.offsetTop - 5 * iSpeed + 'px';
            }
        }, 30);
    }
    //鼠标移入下面水滴时的变化
    oImge5_water2.onmouseover = function () {
        oBtn_down.style.backgroundColor = "white";
        oBtn_down.style.color = "#71bde4";
    }
    //鼠标移出下面水滴时的变化
    oImge5_water2.onmouseout = function () {
        oBtn_down.style.backgroundColor = "#71bde4";
        oBtn_down.style.color = "white";
    }





    //页面六
   document.getElementById("li61").onmouseover = function(){
    document.getElementById("li61").style.textDecoration="underline";
   }
   document.getElementById("li62").onmouseover = function(){
    document.getElementById("li62").style.textDecoration="underline";
   }
   document.getElementById("li63").onmouseover = function(){
    document.getElementById("li63").style.textDecoration="underline";
   }
   document.getElementById("li64").onmouseover = function(){
    document.getElementById("li64").style.textDecoration="underline";
   }
   document.getElementById("li65").onmouseover = function(){
    document.getElementById("li65").style.textDecoration="underline";
   }
   document.getElementById("li66").onmouseover = function(){
    document.getElementById("li66").style.textDecoration="underline";
   }
   document.getElementById("li66").onmouseover = function(){
    document.getElementById("li66").style.textDecoration="underline";
   }
   document.getElementById("li67").onmouseover = function(){
    document.getElementById("li67").style.textDecoration="underline";
   }
   document.getElementById("li68").onmouseover = function(){
    document.getElementById("li68").style.textDecoration="underline";
   }
   document.getElementById("li69").onmouseover = function(){
    document.getElementById("li69").style.textDecoration="underline";
   }
   document.getElementById("li60").onmouseover = function(){
    document.getElementById("li60").style.textDecoration="underline";
   }




   document.getElementById("li61").onmouseout = function(){
    document.getElementById("li61").style.textDecoration="none";
   }
   document.getElementById("li62").onmouseout = function(){
    document.getElementById("li62").style.textDecoration="none";
   }
   document.getElementById("li63").onmouseout = function(){
    document.getElementById("li63").style.textDecoration="none";
   }
   document.getElementById("li64").onmouseout = function(){
    document.getElementById("li64").style.textDecoration="none";
   }
   document.getElementById("li65").onmouseout = function(){
    document.getElementById("li65").style.textDecoration="none";
   }
   document.getElementById("li66").onmouseout = function(){
    document.getElementById("li66").style.textDecoration="none";
   }
   document.getElementById("li66").onmouseout = function(){
    document.getElementById("li66").style.textDecoration="none";
   }
   document.getElementById("li67").onmouseout = function(){
    document.getElementById("li67").style.textDecoration="none";
   }
   document.getElementById("li68").onmouseout = function(){
    document.getElementById("li68").style.textDecoration="none";
   }
   document.getElementById("li69").onmouseout = function(){
    document.getElementById("li69").style.textDecoration="none";
   }
   document.getElementById("li60").onmouseout = function(){
    document.getElementById("li60").style.textDecoration="none";
   }

    


    var oP1 = document.getElementById("p1")
    var oP2 = document.getElementById("p2")
    var oWeibo = document.getElementById("weibo")
    var oWeixin = document.getElementById("weixin")
    oWeibo.onmousemove = function () {
        oP1.style.color = "white";
        document.getElementById("weibo1").src = "img/weibo2.png";
    }
    oWeibo.onmouseout = function () {
        oP1.style.color = "rgb(160, 158, 158)";
        document.getElementById("weibo1").src = "img/weibo1.png";
    }

    oWeixin.onmousemove = function () {
        oP2.style.color = "white";
        document.getElementById("weixin1").src = "img/weixin2.png";
        document.getElementById("erweima").style.display = "block";
    }
    oWeixin.onmouseout = function () {
        oP2.style.color = "rgb(160, 158, 158)";
        document.getElementById("weixin1").src = "img/weixin1.png";
        document.getElementById("erweima").style.display = "none";

    }

    var oLi_bottom1 = document.getElementById("li_bottom1")
    oLi_bottom1.onmouseover = function () {
        oLi_bottom1.style.color = "white";
    }
    oLi_bottom1.onmouseout = function () {
        oLi_bottom1.style.color = "rgb(160, 158, 158)";
    }


    var oLi_bottom2 = document.getElementById("li_bottom2")
    oLi_bottom2.onmouseover = function () {
        oLi_bottom2.style.color = "white";
    }
    oLi_bottom2.onmouseout = function () {
        oLi_bottom2.style.color = "rgb(160, 158, 158)";
    }



    var oLi_bottom3 = document.getElementById("li_bottom3")
    oLi_bottom3.onmouseover = function () {
        oLi_bottom3.style.color = "white";
    }
    oLi_bottom3.onmouseout = function () {
        oLi_bottom3.style.color = "rgb(160, 158, 158)";
    }



    var oLi_bottom4 = document.getElementById("li_bottom4")
    oLi_bottom4.onmouseover = function () {
        oLi_bottom4.style.color = "white";
    }
    oLi_bottom4.onmouseout = function () {
        oLi_bottom4.style.color = "rgb(160, 158, 158)";
    }

    var oLi_bottom5 = document.getElementById("li_bottom5")
    oLi_bottom5.onmouseover = function () {
        oLi_bottom5.style.color = "white";
    }
    oLi_bottom5.onmouseout = function () {
        oLi_bottom5.style.color = "rgb(160, 158, 158)";
    }


    var oLi_bottom6 = document.getElementById("li_bottom6")
    oLi_bottom6.onmouseover = function () {
        oLi_bottom6.style.color = "white";
    }
    oLi_bottom6.onmouseout = function () {
        oLi_bottom6.style.color = "rgb(160, 158, 158)";
    }


    var oLi_bottom7 = document.getElementById("li_bottom7")
    oLi_bottom7.onmouseover = function () {
        oLi_bottom7.style.color = "white";
    }
    oLi_bottom7.onmouseout = function () {
        oLi_bottom7.style.color = "rgb(160, 158, 158)";
    }











}