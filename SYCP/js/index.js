/**
 * Created by EZIO on 2016/12/5.
 */
$(function () {
    $('.flexslider').flexslider({
        slideshowSpeed: 4000, //展示时间间隔ms
        animationSpeed: 400, //滚动时间ms
        animation: "slide",
        directionNav: false ,
    });
})
$(function () {
    $(".ssq-dec").click(function () {
        var ssq = Number($(".ssq-buy").val());
        if(ssq>1){
            var newDecSsq= ssq-1;
            $(".ssq-buy").val(newDecSsq);
        }
    })
    $(".ssq-add").click(function () {
        var ssq = Number($(".ssq-buy").val());
        if(ssq<999){
            var newAddSsq = ssq+1;
            $(".ssq-buy").val(newAddSsq);
        }
    })
    $(".ssq-buy").blur(function () {
        var ssq = Number($(".ssq-buy").val());
        if(ssq>999){
            var newSsq = 999;
            $(".ssq-buy").val(newSsq);
        }
        if(ssq<1){
            var newSsq = 1;
            $(".ssq-buy").val(newSsq);
        }
    })
})
$(function(){
    function buttonOn(show,buttonShow,onWhat){
        if($("#"+show).css("display")=="block"){
            $("#"+buttonShow).addClass(onWhat)
        }
    }
    buttonOn("ssq-show","ssq-show-button","lottery-choose-on");
    function switchShow(show,buttonShow,onWhat){
        $("#"+buttonShow).click(function(){
            $("#"+show).show();
            $("div[id$='-show']").not("#"+show).hide();
            $("button[id$='-show-button']").not("#"+buttonShow).removeClass(onWhat);
            $("#"+buttonShow).addClass(onWhat);
        })
    }
    switchShow("ssq-show","ssq-show-button","lottery-choose-on");
    switchShow("dlt-show","dlt-show-button","lottery-choose-on");
    switchShow("3d-show","3d-show-button","lottery-choose-on");
})
$(function () {
    $(".copy").click(function () {
        var trList =$($(this).parent("td")).parent("tr");
        copyToClipboard(trList);
    })
})