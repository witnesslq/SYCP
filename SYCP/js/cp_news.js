/**
 * Created by EZIO on 2016/12/13.
 */
$(function () {
    $(".content-news a").hover(function () {
        $(this).find(".content-news-img-1").attr("src","images/cp_news/look-hover.png");
        $(this).find(".content-news-img-2").attr("src","images/cp_news/time-hover.png");
    },function () {
        $(this).find(".content-news-img-1").attr("src","images/cp_news/look.png");
        $(this).find(".content-news-img-2").attr("src","images/cp_news/time.png");
    })
})