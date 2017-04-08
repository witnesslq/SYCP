/**
 * Created by EZIO on 2016/12/12.
 */
$(function(){
    function buttonOn(show,buttonShow,onWhat){
        if($("#"+show).css("display")=="block"){
            $("#"+buttonShow).addClass(onWhat)
        }
    }
    buttonOn("zx-show","zx-show-button","content-bar-button-on");
    function switchShow(show,buttonShow,onWhat){
        $("#"+buttonShow).click(function(){
            $("#"+show).show();
            $("div[id$='-show']").not("#"+show).hide();
            $("button[id$='-show-button']").not("#"+buttonShow).removeClass(onWhat);
            $("#"+buttonShow).addClass(onWhat);
        })
    }
    switchShow("zx-show","zx-show-button","content-bar-button-on");
    switchShow("zx6-show","zx6-show-button","content-bar-button-on");
    switchShow("zx3-show","zx3-show-button","content-bar-button-on");
})
$(function () {
    $(".num-box-all").click(function () {
        $(this).parents("li").find(".red-ball").addClass("red-ball-on")
    })
    $(".num-box-clear-all").click(function () {
        $(this).parents("li").find(".red-ball").removeClass("red-ball-on")
    })
    $(".num-box-big").click(function () {
        $(this).parents("li").find(".ball:gt(4)").addClass("red-ball-on");
        $(this).parents("li").find(".ball:lt(5)").removeClass("red-ball-on");
    })
    $(".num-box-small").click(function () {
        $(this).parents("li").find(".ball:lt(5)").addClass("red-ball-on");
        $(this).parents("li").find(".ball:gt(4)").removeClass("red-ball-on");
    })
    $(".num-box-odd").click(function () {
        $(this).parents("li").find(".ball:odd").addClass("red-ball-on");
        $(this).parents("li").find(".ball:even").removeClass("red-ball-on");
    })
    $(".num-box-even").click(function () {
        $(this).parents("li").find(".ball:even").addClass("red-ball-on");
        $(this).parents("li").find(".ball:odd").removeClass("red-ball-on");
    })
    $(".add-btn-box>a").click(function () {
        $(".ball").removeClass("red-ball-on")
    })
})
$(function () {
    $(".add-num").click(function () {
        var inTotalRed=  Number($(".in-total-red").text());
        var inTotalBlue=  Number($(".in-total-blue").text());
        if (inTotalRed == 0 || inTotalBlue == 0){
            $(".alert").show();
            $(".mask").show();
        }
    })
})
$(function () {
    $(".alert-title-2>img").click(function () {
        $(".alert").hide();
        $(".mask").hide();
    })
})
$(function () {
    var SysSecond;
    var InterValObj;

    $(document).ready(function() {
        SysSecond = 360000; //这里获取倒计时的起始时间
        InterValObj = window.setInterval(SetRemainTime, 1000); //间隔函数，1秒执行
    });

    //将时间减去1秒，计算天、时、分、秒
    function SetRemainTime() {
        if (SysSecond > 0) {
            SysSecond = SysSecond - 1;
            var second = Math.floor(SysSecond % 60);             // 计算秒
            var minite = Math.floor((SysSecond / 60) % 60);      //计算分
            var hour = Math.floor((SysSecond / 3600) % 24);      //计算小时
            var day = Math.floor((SysSecond / 3600) / 24);        //计算天
            if (second >9){
                var second1 = second;
            }else {
                var second1 = "0"+second;
            }
            if (minite>9){
                var minite1 = minite;
            }else {
                var minite1 = "0"+minite;
            }
            if (hour>9){
                var hour1 = hour;
            }else {
                var hour1 = "0"+hour;
            }
            if (day>9){
                var day1=day;
            }else {
                var day1="0"+day;
            }
            $(".limit-time").html(day1 + "天" + hour1 + "小时" + minite1 + "分" + second1 + "秒");
        } else {//剩余时间小于或等于0的时候，就停止间隔函数
            window.clearInterval(InterValObj);
            //这里可以添加倒计时时间为0后需要执行的事件
        }
    }
})