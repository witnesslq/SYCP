/**
 * Created by EZIO on 2016/12/9.
 */
$(function () {
    $(".float-detail-can>span").hover(function () {
        $(this).next().show();
    },function () {
        $(this).next().hide();
    })
})
$(function(){
//获取要定位元素距离浏览器顶部的距离
    var navH = $(".information-table").offset().top;
//滚动条事件
    $(window).scroll(function(){
//获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
        if(scroH>=navH){
            $(".information-table").css({"position":"fixed","top":0});
        }else if(scroH<navH){
            $(".information-table").css({"position":"static"});
        }
    })
})
$(function () {
    $(".point-more-show-button").hover(function () {
        $(this).find(".point-more-show").show();
        $(this).find(".point-more").addClass("point-more-on");
    },function () {
        $(this).find(".point-more-show").hide();
        $(this).find(".point-more").removeClass("point-more-on");
    })
})
$(function () {
    $(".win-false-more").hover(function () {
        $(this).find(".gd").show();
        $(this).find(".point-more").addClass("point-more-on");
    },function () {
        $(this).find(".gd").hide();
        $(this).find(".point-more").removeClass("point-more-on");
    })

})
$(function () {
    $(".question").hover(function () {
        $(this).next().show();
    },function () {
        $(this).next().hide();
    })
    $(".question-inline").hover(function () {
        $(this).next().show();
    },function () {
        $(this).next().hide();
    })
})
$(function () {
    $(".date-table-button-off").click(function () {
        if ($(this).hasClass("date-table-button-on")){
            $(this).removeClass("date-table-button-on");
        }else {
            $(this).addClass("date-table-button-on");
        }
    })
    $(".goals-more-table-box td").not($(".goal-more-table-title")).click(function () {
        if ($(this).hasClass("date-table-button-on")){
            $(this).removeClass("date-table-button-on");
            $(this).find("p").css({"color":"#333333"});
        }else {
            $(this).addClass("date-table-button-on");
            $(this).find("p").css({"color":"#ffffff"});
        }
    })
})
$(function () {
    $(".date-table").each(function (index){
        if(0 == index%2) {
            $(this).css("background-color", "#ffffff");
        }
        if(1 == index%2) {
            $(this).css("background-color", "#f4f4f4");
        }
    });
    $(".date-table").hover(function () {
        $(this).css("background-color", "#fff9df");
    },function () {
        $(".date-table").each(function (index){
            if(0 == index%2) {
                $(this).css("background-color", "#ffffff");
            }
            if(1 == index%2) {
                $(this).css("background-color", "#f4f4f4");
            }
        });
    })
})
$(function () {
    $(".date-table-button-2-1").click(function () {
        if ($(this).parents(".table-box").find(".goals-more-table-box").css("display") == "none"){
            $(this).parents(".table-box").find(".goals-more-table-box").show();
            $(this).find(".point-more").addClass("point-more-on");
            $(this).addClass("goal-more-box-on");
        }else {
            $(this).parents(".table-box").find(".goals-more-table-box").hide();
            $(this).find(".point-more").removeClass("point-more-on");
            $(this).removeClass("goal-more-box-on");
        }
    })
    $(".date-table-button-2-2").click(function () {
        if ($(this).parents(".end-table-box").find(".end-more-table-box").css("display") == "none"){
            $(this).parents(".end-table-box").find(".end-more-table-box").show();
            $(this).find(".point-more").addClass("point-more-on");
            $(this).addClass("goal-more-box-on");
        }else {
            $(this).parents(".end-table-box").find(".end-more-table-box").hide();
            $(this).find(".point-more").removeClass("point-more-on");
            $(this).removeClass("goal-more-box-on");
        }
    })
    $(".able-match").click(function () {
        if ($(this).parents(".date").find(".table-box").css("display") == "none"){
            $(this).parents(".date").find(".table-box").show();
            $(this).find(".point-more").addClass("point-more-on");
        }else {
            $(this).parents(".date").find(".table-box").hide();
            $(this).find(".point-more").removeClass("point-more-on");
        }
    })
    $(".show-end-match-button").click(function () {
        if ($(this).parents(".date").find(".end-table-box").css("display") == "none"){
            $(this).parents(".date").find(".end-table-box").show();
            $(this).html("隐藏");
        }else {
            $(this).parents(".date").find(".end-table-box").hide();
            $(this).html("显示");
        }
    })
})
$(function () {
    $(".red-text").css({"color":"red"})
})
$(function () {
    $(".ssq-content-right-title-link-detail").click(function () {
        $(".alert").show();
        $(".mask").show();
    })
})
$(function () {
    $(".zjq-area-use").click(function () {
        if ($(this).hasClass("zjq-area-use-on")){
            $(this).removeClass("zjq-area-use-on");
        }else {
            $(this).addClass("zjq-area-use-on");
        }
    })
})
$(function () {
    function getNowFormatDate()
    {
        var day = new Date();
        var Year = 0;
        var Month = 0;
        var Day = 0;
        var hour= 0;
        var min= 0;
        var second= 0;
        var CurrentDate = "";
        Year = day.getFullYear();//ie火狐下都可以
        Month = day.getMonth()+1;
        Day = day.getDate();
        hour = day.getHours();
        min = day.getMinutes();
        second = day.getSeconds();
        if (Month >= 10 ) {
            CurrentDate += Month + "-";
        } else {
            CurrentDate += "0" + Month + "-";
        }
        if (Day >= 10 ) {
            CurrentDate += Day+" " ;
        } else {
            CurrentDate += "0" + Day+" " ;
        }
        if (hour>=10){
            CurrentDate += hour+":" ;
        }else {
            CurrentDate += "0" + hour+":";
        }
        if (min>=10){
            CurrentDate += min+":" ;
        }else {
            CurrentDate += "0" + min+":";
        }
        if (second>=10){
            CurrentDate += second;
        }else {
            CurrentDate += "0" + second;
        }
        return CurrentDate;
    }
    setInterval(function(){
        $('.current>span').html(getNowFormatDate)},1000
    );
})
$(function () {
    var SysSecond;
    var InterValObj;

    $(document).ready(function() {
        SysSecond = 360; //这里获取倒计时的起始时间
        InterValObj = window.setInterval(SetRemainTime, 1000); //间隔函数，1秒执行
    });

    //将时间减去1秒，计算天、时、分、秒
    function SetRemainTime() {
        if (SysSecond > 0) {
            SysSecond = SysSecond - 1;
            var minite = Math.floor(SysSecond / 60);      //计算分
            var minite1 = minite;
            $(".limit-min").html(minite1);
        } else {//剩余时间小于或等于0的时候，就停止间隔函数
            window.clearInterval(InterValObj);
            //这里可以添加倒计时时间为0后需要执行的事件
        }
    }
})