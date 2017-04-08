/**
 * Created by EZIO on 2016/12/12.
 */
$(function(){
//获取要定位元素距离浏览器顶部的距离
    var navH = $(".content-table-title").offset().top;
//滚动条事件
    $(window).scroll(function(){
//获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
        if(scroH>=navH){
            $(".content-table-title").css({"position":"fixed","top":0});
        }else if(scroH<navH){
            $(".content-table-title").css({"position":"static"});
        }
    })
})
$(function () {
    $(".match-wf").css({
        "border-left":"none"
    })
    $(".match-wf").css({
        "border-right":"none"
    })
})
$(function () {
    $(".tz-button-single").click(function () {
        if($(this).hasClass("tz-button-on")){
            $(this).removeClass("tz-button-on");
        }else {
            $(this).addClass("tz-button-on");
        }
        if($(this).parents("tr").find(".tz-button-single1").hasClass("tz-button-on")&&
            $(this).parents("tr").find(".tz-button-single2").hasClass("tz-button-on")&&
            $(this).parents("tr").find(".tz-button-single3").hasClass("tz-button-on")){
            $(this).parents("tr").find(".tz-button-all").html("清");
            $(this).parents("tr").find(".tz-button-all").addClass("tz-button-on");
        }else {
            $(this).parents("tr").find(".tz-button-all").html("全");
            $(this).parents("tr").find(".tz-button-all").removeClass("tz-button-on");
        }
    })
    $(".tz-button-all").click(function () {
        if($(this).parents("tr").find(".tz-button-single1").hasClass("tz-button-on")&&
            $(this).parents("tr").find(".tz-button-single2").hasClass("tz-button-on")&&
            $(this).parents("tr").find(".tz-button-single3").hasClass("tz-button-on")){
            $(this).parents("tr").find(".tz-button").removeClass("tz-button-on");
            $(this).html("全");
        }else {
            $(this).parents("tr").find(".tz-button").addClass("tz-button-on");
            $(this).html("清");
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