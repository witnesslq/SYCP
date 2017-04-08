/**
 * Created by EZIO on 2016/12/11.
 */
$(function () {
    $(".bxsx>span").click(function () {
        if ($(this).next(".bxsx-show").css("display") == "none"){
            $(this).addClass("bxsx-on");
            $(this).next(".bxsx-show").show();
        }else {
            $(this).removeClass("bxsx-on");
            $(this).next(".bxsx-show").hide();
        }
    })
    $(".submit").click(function () {
        $(this).parent(".bxsx-show").hide();
        $(this).parent(".bxsx-show").prev(".bxsx>span").removeClass("bxsx-on");
    })
})
$(function () {
    $(".date-pick").click(function () {
        if($(this).hasClass("date-pick-on")){
            $(this).removeClass("date-pick-on");
        }else {
            $(this).addClass("date-pick-on");
        }
    })
})
$(function () {
    $(".show-table-button").click(function () {
        if ($(this).parents(".date").find(".date-table-1").css("display") == "none"){
            $(this).parents(".date").find(".date-table-1").show();
            $(this).find("span").html("隐藏");
            $(this).find("img").removeClass("point-more-on");
        }else {
            $(this).parents(".date").find(".date-table-1").hide();
            $(this).find("span").html("显示");
            $(this).find("img").addClass("point-more-on");
        }
    })
})
$(function () {
    $(".date-table-1 tr").each(function (index){
        if(0 == index%2) {
            $(this).css("background-color", "#ffffff");
        }
        if(1 == index%2) {
            $(this).css("background-color", "#F0F8FF");
        }
    });
    $(".date-table-1 tr").hover(function () {
        $(this).css("background-color", "#c8f8b0");
    },function () {
        $(".date-table-1 tr").each(function (index){
            if(0 == index%2) {
                $(this).css("background-color", "#ffffff");
            }
            if(1 == index%2) {
                $(this).css("background-color", "#F0F8FF");
            }
        });
    })
})
$(function () {
    $(".date-table-2").hover(function () {
        $(this).css("background-color", "#c8f8b0");
    },function () {
        $(this).css("background-color", "#ffffff");
    })
})
$(function () {
    $(".show-option-a").click(function () {
        if ($(this).parents(".ties").find(".goal-more-table-box").css("display") == "none"){
            $(this).addClass("show-option-a-on");
            $(this).parents(".ties").find(".goal-more-table-box").show();
            $(this).html("隐藏选项");
        }else {
            $(this).removeClass("show-option-a-on");
            $(this).parents(".ties").find(".goal-more-table-box").hide();
            $(this).html("显示选项");
        }
    })
})
$(function () {
    $("#save-choose").click(function () {
        $(".checkbox-num").each(function () {
            if($(this).is(":checked")){
            }else {
                $(this).parents(".show-tr").hide();
            }
            this.checked = false;
        })
    })
    $("#hide-choose").click(function () {
        $(".checkbox-num").each(function () {
            if($(this).prop("checked")){
                $(this).parents(".show-tr").hide();
            }
            this.checked = false;
        })
    })
    $("#all-choose").click(function () {
        $(".show-tr").show();
    })
})