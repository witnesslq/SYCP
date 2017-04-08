/**
 * Created by EZIO on 2016/12/11.
 */
$(function () {
    $(".show-table-button").click(function () {
        if ($(this).parents(".date").find(".date-table-2").css("display") == "none"){
            $(this).parents(".date").find(".date-table-2").show();
            $(this).find("span").html("隐藏");
            $(this).find("img").removeClass("point-more-on");
        }else {
            $(this).parents(".date").find(".date-table-2").hide();
            $(this).find("span").html("显示");
            $(this).find("img").addClass("point-more-on");
        }
    })
})