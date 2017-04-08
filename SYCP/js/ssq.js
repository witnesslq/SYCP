/**
 * Created by EZIO on 2016/12/7.
 */
$(function () {
    $(".red-ball").click(function () {
        if($(this).hasClass("red-ball-on")){
            $(this).removeClass("red-ball-on");
        }else {
            $(this).addClass("red-ball-on");
        }
    })
    $(".blue-ball").click(function () {
        if($(this).hasClass("blue-ball-on")){
            $(this).removeClass("blue-ball-on");
        }else {
            $(this).addClass("blue-ball-on");
        }
    })
    $(".clear-red-ball").click(function () {
        $(".red-ball").removeClass("red-ball-on");
    })
    $(".clear-blue-ball").click(function () {
        $(".blue-ball").removeClass("blue-ball-on");
    })
})
$(function () {
    $(".random").hover(function () {
        $(this).next().show();
    },function () {
        $(this).next().hide();
    })
    $(".random-all").hover(function () {
        $(this).show();
    },function () {
        $(this).hide();
    })
    $(".random-all>li").click(function () {
        var getIt =  $(this).text();
        $($(this).parent()).parent().find(".random").text(getIt);
        $(this).parent().hide();
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
    $(".alert-title>img").click(function () {
        $(".alert").hide();
        $(".mask").hide();
    })
    $(".quite").click(function () {
        $(".alert").hide();
        $(".mask").hide();
    })
    $(".random-all-bottom").click(function () {
        $(".alert").hide();
        $(".mask").hide();
    })
})
$(function () {
    $(".add-one-ad").click(function () {
        $(".add-one-ad").hide();
        $(".add-one img").hide();
    })
    $(".ssq-ad-box-ad").click(function () {
        $(".ssq-ad-box-ad").hide();
        $(".ssq-ad-box img").hide();
    })
})
$(function () {
    var ssq1 = Number($(".ssq-buy").val());
    if(ssq1==1){
        $(".ssq-dec").css({"color":"#999999"})
    }
    $(".ssq-dec").click(function () {
        var ssq = Number($(".ssq-buy").val());
        if(ssq>1){
            var newDecSsq= ssq-1;
            $(".ssq-buy").val(newDecSsq);
        }
        if(ssq<=2){
            $(".ssq-dec").css({"color":"#999999"})
        }
    })
    $(".ssq-add").click(function () {
        var ssq = Number($(".ssq-buy").val());
        if(ssq<99999){
            var newAddSsq = ssq+1;
            $(".ssq-buy").val(newAddSsq);
        }
        if(ssq>=1){
            $(".ssq-dec").css({"color":"#333333"})
        }
    })
    $(".ssq-buy").blur(function () {
        var ssq = Number($(".ssq-buy").val());
        if(ssq>99999){
            var newSsq = 99999;
            $(".ssq-buy").val(newSsq);
        }
        if(ssq<1){
            var newSsq = 1;
            $(".ssq-buy").val(newSsq);
        }
        if(ssq<=1){
            $(".ssq-dec").css({"color":"#999999"})
        }else {
            $(".ssq-dec").css({"color":"#333333"})
        }
    })
})
$(function () {
    $(".radio").change(function () {
        if($(this).prop("checked")){
            $(this).prop("checked",true);
            $(this).parent().addClass("radio-checked");
            $(".radio-box").not($(this).parent()).removeClass("radio-checked");
        }else {
            $(this).prop("checked",false);
            $(this).parent().removeClass("radio-checked");
        }
    })
})
$(function () {
    $(".checkbox").change(function () {
        if($(this).prop("checked")){
            $(this).prop("checked",true);
            $(this).parent().addClass("checkbox-checked");
        }else {
            $(this).prop("checked",false);
            $(this).parent().removeClass("checkbox-checked");
        }
    })
})
$(function(){
    function buttonOn(show,buttonShow,onWhat){
        if($("#"+show).css("display")=="block"){
            $("#"+buttonShow).addClass(onWhat)
        }
    }
    buttonOn("cold-show","cold-show-button","count-div-button-on");
    function switchShow(show,buttonShow,onWhat){
        $("#"+buttonShow).click(function(){
            $("#"+show).show();
            $("ul[id$='-show']").not("#"+show).hide();
            $("button[id$='-show-button']").not("#"+buttonShow).removeClass(onWhat);
            $("#"+buttonShow).addClass(onWhat);
        })
    }
    switchShow("cold-show","cold-show-button","count-div-button-on");
    switchShow("hot-show","hot-show-button","count-div-button-on");
})
$(function(){
    function buttonOn(show,buttonShow,onWhat){
        if($("#"+show).css("display")=="block"){
            $("#"+buttonShow).addClass(onWhat)
        }
    }
    buttonOn("ssq-standard-show","ssq-standard-show-button","ssq-content-bar-button-on");
    function switchShow(show,buttonShow,onWhat){
        $("#"+buttonShow).click(function(){
            $("#"+show).show();
            $("div[id$='-show']").not("#"+show).hide();
            $("button[id$='-show-button']").not("#"+buttonShow).removeClass(onWhat);
            $("#"+buttonShow).addClass(onWhat);
        })
    }
    switchShow("ssq-standard-show","ssq-standard-show-button","ssq-content-bar-button-on");
    switchShow("ssq-advantage-show","ssq-advantage-show-button","ssq-content-bar-button-on");
})
$(function(){
    function buttonOn(show,buttonShow,onWhat){
        if($("#"+show).css("display")=="block"){
            $("#"+buttonShow).addClass(onWhat)
        }
    }
    buttonOn("choose-show","choose-show-button","ssq-message-button-on");
    function switchShow(show,buttonShow,onWhat){
        $("#"+buttonShow).click(function(){
            $("#"+show).show();
            $("div[id$='-show2']").not("#"+show).hide();
            $("button[id$='-show-button']").not("#"+buttonShow).removeClass(onWhat);
            $("#"+buttonShow).addClass(onWhat);
        })
    }
    switchShow("choose-show2","choose-show-button","ssq-message-button-on");
    switchShow("luck-show2","luck-show-button","ssq-message-button-on");
})
$(function () {
    function switchOn(buttonShow,onWhat){
        $("#"+buttonShow).click(function(){
            $("li[id^='show-pic-']").not("#"+buttonShow).removeAttr("class");
            $("li[id^='show-pic-']").find("a").hide();
            $("li[id^='show-pic-']").not("#"+buttonShow).find("a").show();
            $("#"+buttonShow).addClass(onWhat);
        })
    }
    switchOn("show-pic-mouse","mouse-on");
    switchOn("show-pic-cow","cow-on");
    switchOn("show-pic-tiger","tiger-on");
    switchOn("show-pic-rabbit","rabbit-on");
    switchOn("show-pic-dragon","dragon-on");
    switchOn("show-pic-snake","snake-on");
    switchOn("show-pic-horse","horse-on");
    switchOn("show-pic-elephant","elephant-on");
    switchOn("show-pic-monkey","monkey-on");
    switchOn("show-pic-chicken","chicken-on");
    switchOn("show-pic-dog","dog-on");
    switchOn("show-pic-pig","pig-on");

    switchOn("show-pic-xz01","xz01-on");
    switchOn("show-pic-xz02","xz02-on");
    switchOn("show-pic-xz03","xz03-on");
    switchOn("show-pic-xz04","xz04-on");
    switchOn("show-pic-xz05","xz05-on");
    switchOn("show-pic-xz06","xz06-on");
    switchOn("show-pic-xz07","xz07-on");
    switchOn("show-pic-xz08","xz08-on");
    switchOn("show-pic-xz09","xz09-on");
    switchOn("show-pic-xz10","xz10-on");
    switchOn("show-pic-xz11","xz11-on");
    switchOn("show-pic-xz12","xz12-on");
})
$(function () {
    function switchOn1(buttonShow,onWhat){
        $("#"+buttonShow).click(function(){
            $("li[id^='show1-pic-']").not("#"+buttonShow).removeAttr("class");
            $("#"+buttonShow).addClass(onWhat);
        })
    }
    switchOn1("show1-pic-1","to-num-li-on");
    switchOn1("show1-pic-2","to-num-li-on");
    switchOn1("show1-pic-3","to-num-li-on");
    switchOn1("show1-pic-4","to-num-li-on");
    switchOn1("show1-pic-5","to-num-li-on");
    switchOn1("show1-pic-6","to-num-li-on");
    switchOn1("show1-pic-7","to-num-li-on");
    switchOn1("show1-pic-8","to-num-li-on");
    switchOn1("show1-pic-9","to-num-li-on");
    switchOn1("show1-pic-10","to-num-li-on");
})
$(function () {
    function buttonOn(show,buttonShow,onWhat){
        if($("#"+show).css("display")=="block"){
            $("#"+buttonShow).addClass(onWhat)
        }
    }
    buttonOn("sx-choose-show","sx-choose-show-button","choose-luck-box-li-on");
    function switchShow(show,buttonShow,onWhat){
        $("#"+buttonShow).click(function(){
            $("#"+show).show();
            $("ul[id$='-choose-show']").not("#"+show).hide();
            $("li[id$='-choose-show-button']").not("#"+buttonShow).removeClass(onWhat);
            $("#"+buttonShow).addClass(onWhat);
        })
    }
    switchShow("sx-choose-show","sx-choose-show-button","choose-luck-box-li-on");
    switchShow("xz-choose-show","xz-choose-show-button","choose-luck-box-li-on");
    switchShow("sr-choose-show","sr-choose-show-button","choose-luck-box-li-on");
    switchShow("xm-choose-show","xm-choose-show-button","choose-luck-box-li-on");
    switchShow("sj-choose-show","sj-choose-show-button","choose-luck-box-li-on");
})
$(function () {
    $(".choose-time>span").hover(function () {
        $(this).next().show();
    },function () {
        $(this).next().hide();
    })
    $(".show-more").hover(function () {
        $(this).show();
    },function () {
        $(this).hide();
    })
    $(".show-more>li").click(function () {
        var getIt =  $(this).text();
        $($(this).parent()).parent().find("span").text(getIt);
        $(this).parent().hide();
    })
})
$(function () {
    $(".show-bar").each(function () {
        var showBarData = $(this).attr("data-length")*6;
        $(this).width(showBarData);
    })
})