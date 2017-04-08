/**
 * Created by EZIO on 2016/12/13.
 */
$(function () {
    $(".type>a").click(function () {
        $(".type>a").not($(this)).removeClass("type-on");
        $(this).addClass("type-on");
    })
})
$(function () {
    $(".list-table-content").each(function (index){
        if(0 == index%2) {
            $(this).css("background-color", "#ffffff");
        }
        if(1 == index%2) {
            $(this).css("background-color", "#f7f7f7");
        }
    });
})