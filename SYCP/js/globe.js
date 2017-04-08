$(function () {
	$('.phone').mouseenter(function(event) {
		$(this).find('.phone-link').attr('src', 'images/phone-link-1.png');
	});
	$('.phone').mouseleave(function(event) {
		$(this).find('.phone-link').attr('src', 'images/phone-link.png');
	});

    $(".show-choose-type").hide()
    $(".choose").hover(function () {
        $(".show-choose-type").show();
        $(".choose>img").addClass("choose-img-on");
    },function () {
        $(".show-choose-type").hide();
        $(".choose>img").removeClass("choose-img-on");
    })
    $(".choose-type>a").click(function () {
        $(".show-choose-type").hide()
    })

    var $remain=$(".remain");
    $remain.find('.right').click(function(event) {
        $remain.find('span').text('***');
        $(this).remove();
    });
})

//

//隐藏显示金额切换
$(document).ready(function(){
    var m=$(".account .show-hidden1").text();
    $(".account .show-hidden2").click(function(){
        var junge = $(".account .show-hidden2").text();
        if (junge == "显示") {
            $(".account .show-hidden2").text("隐藏");
            $(".account .show-hidden1").text(m);
        }
        if (junge == "隐藏") {
            $(".account .show-hidden2").text("显示");
            $(".account .show-hidden1").text("******");
        }
    });
});
//my-account
$(document).ready(function(){
    //是否手机认证
    if($(".account-center-2 p:eq(0)").attr("data-safe1") == "isphone") {
        $(".account-center-2 p:eq(0)").html("手机已认证<img src=\" " +"images/account-4_03.png\">");
    }
    else{
        $(".account-center-2 p:eq(0)").html("手机未认证<img src=\" " +"images/account5_03.png\">");
    }
    //是否邮箱认证
    if($(".account-center-2 p:eq(1)").attr("data-safe2") == "noemail") {
        $(".account-center-2 p:eq(1)").html("邮箱未认证<img src=\" " +"images/account-4_15.png\">");
    }
    else{
        $(".account-center-2 p:eq(1)").html("邮箱已认证<img src=\" " +"images/account5_06.png\">");
    }
    //是否实名认证
    if($(".account-center-2 p:eq(2)").attr("data-safe3") == "noname") {
        $(".account-center-2 p:eq(2)").html("实名未认证<img src=\" " +"images/account-4_09.png\">");
    }
    else{
        $(".account-center-2 p:eq(2)").html("实名已认证<img src=\" " +"images/account5_11.png\">");
    }
})
//lottery-record
$(document).ready(function() {
    $(".record-center-2-title p:eq(0)").click(function() {
        $(".record-center-2-title p:eq(0)").removeClass().addClass("addcolor1");
        $(".record-center-2-title p:eq(1)").removeClass().addClass("addcolor2");
        $(".record-function-2").css("display","none");
        $(".record-function-1").css("display","block");
    });
    $(".record-center-2-title p:eq(1)").click(function() {
        $(".record-center-2-title p:eq(1)").removeClass().addClass("addcolor1");
        $(".record-center-2-title p:eq(0)").removeClass().addClass("addcolor2");
         $(".record-function-1").css("display","none");
        $(".record-function-2").css("display","block");
    });
});
//account-detail
$(document).ready(function(){
    //是否手机认证
    if($(".detail-center-2 p:eq(0)").attr("data-safe1") == "isphone") {
        $(".detail-center-2 p:eq(0)").html("手机已认证<img src=\" " +"images/account-4_03.png\">");
    }
    else{
        $(".detail-center-2 p:eq(0)").html("手机未认证<img src=\" " +"images/account5_03.png\">");
    }
    //是否邮箱认证
    if($(".detail-center-2 p:eq(1)").attr("data-safe2") == "noemail") {
        $(".detail-center-2 p:eq(1)").html("邮箱未认证<img src=\" " +"images/account-4_15.png\">");
    }
    else{
        $(".detail-center-2 p:eq(1)").html("邮箱已认证<img src=\" " +"images/account5_06.png\">");
    }
    //是否实名认证
    if($(".detail-center-2 p:eq(2)").attr("data-safe3") == "noname") {
        $(".detail-center-2 p:eq(2)").html("实名未认证<img src=\" " +"images/account-4_09.png\">");
    }
    else{
        $(".detail-center-2 p:eq(2)").html("实名已认证<img src=\" " +"images/account5_11.png\">");
    }

    //点击切换按钮切换功能
    $(".detail-center-3-second").css("display","none");
    $(".detail-center-3-third").css("display","none");
    $(".detail-center-3-four").css("display","none");
    $(".detail-center-3-five").css("display","none");
    $(".detail-center-3-title p").click(function(event){
        var detailNum = $(event.target).index();
        switch (detailNum){
            case 0:
                $(".detail-center-3-content").children().css("display","none");
                $(".detail-center-3-first").css("display","block");
                $(".detail-center-3-title p").removeClass().addClass("addcolor2");
                $(".detail-center-3-title p:eq(0)").removeClass().addClass("addcolor1");
                break;
            case 1:
                $(".detail-center-3-content").children().css("display","none");
                $(".detail-center-3-second").css("display","block");
                $(".detail-center-3-title p").removeClass().addClass("addcolor2");
                $(".detail-center-3-title p:eq(1)").removeClass().addClass("addcolor1");
                break;
            case 2:
                $(".detail-center-3-content").children().css("display","none");
                $(".detail-center-3-third").css("display","block");
                $(".detail-center-3-title p").removeClass().addClass("addcolor2");
                $(".detail-center-3-title p:eq(2)").removeClass().addClass("addcolor1");
                break;
            case 3:
                $(".detail-center-3-content").children().css("display","none");
                $(".detail-center-3-four").css("display","block");
                $(".detail-center-3-title p").removeClass().addClass("addcolor2");
                $(".detail-center-3-title p:eq(3)").removeClass().addClass("addcolor1");
                break;
            case 4:
                $(".detail-center-3-content").children().css("display","none");
                $(".detail-center-3-four").css("display","block");
                $(".detail-center-3-title p").removeClass().addClass("addcolor2");
                $(".detail-center-3-title p:eq(4)").removeClass().addClass("addcolor1");
                break;
        }
    });
})
//take-money
$(document).ready(function() {
    $(".money-center-2-title p:eq(0)").click(function() {
        $(".money-center-2-title p:eq(0)").removeClass().addClass("addcolor1");
        $(".money-center-2-title p:eq(1)").removeClass().addClass("addcolor2");
        $(".money-center-2-title p:eq(2)").removeClass().addClass("addcolor2");
        $(".money-center-2-second").css("display","none");
        $(".money-center-3-second").css("display","none");
        $(".money-center-2-third").css("display","none");
        $(".money-center-3-third").css("display","none");
        $(".money-center-2-first").css("display","block");
    });
    $(".money-center-2-title p:eq(1)").click(function() {
        $(".money-center-2-title p:eq(1)").removeClass().addClass("addcolor1");
        $(".money-center-2-title p:eq(0)").removeClass().addClass("addcolor2");
        $(".money-center-2-title p:eq(2)").removeClass().addClass("addcolor2");
        $(".money-center-2-first").css("display","none");
        $(".money-center-2-third").css("display","none");
        $(".money-center-3-third").css("display","none");
        $(".money-center-2-second").css("display","block");
        $(".money-center-3-second").css("display","block");
    });
    $(".money-center-2-title p:eq(2)").click(function() {
        $(".money-center-2-title p:eq(2)").removeClass().addClass("addcolor1");
        $(".money-center-2-title p:eq(0)").removeClass().addClass("addcolor2");
        $(".money-center-2-title p:eq(1)").removeClass().addClass("addcolor2");
        $(".money-center-2-first").css("display","none");
        $(".money-center-2-second").css("display","none");
        $(".money-center-3-second").css("display","none");
        $(".money-center-2-third").css("display","block");
        $(".money-center-3-third").css("display","block");
    });
});

//safe-center
$(document).ready(function(){

    //根据分数来确定条形快所占长度
    var widthLong = parseInt($(".safe-center-1 .width-score").text());
    $(".safe-center-1 .width-short").css("width",widthLong*3 + "px");

    //点击相应的安全产品去绑定
    $(".safe-center-2 .first").click(function(){
        window.location.href="account-relation.html"+"?0";
    });
    $(".safe-center-2 .second").click(function(){
        window.location.href="account-relation.html"+"?1";
    });
    $(".safe-center-2 .third").click(function(){
        window.location.href="account-relation.html"+"?2";
    });
    $(".safe-center-2 .four").click(function(){
        window.location.href="account-relation.html"+"?3";
    });
    $(".safe-center-3 .five").click(function(){
        window.location.href="account-relation.html"+"?4";
    });
});
//account-relation
$(document).ready(function(){
    var tit = window.location.search;
    var str = tit.substr(1);
    $(".relation-center-2-title p").click(function(event){
        var num = $(event.target).index();
        switch (num){
            case 0:
                $(".relation-center-2-title p").removeClass().addClass("addcolor2");
                $(".relation-center-2-title p:eq(0)").removeClass().addClass("addcolor1");
                $(".relation-center-2").children().css("display","none");
                $(".relation-center-2-title").css("display","block");
                $(".relation-center-2-first").css("display","block");
                $(".relation-center-3").children().css("display","none");
                $(".relation-center-3-first").css("display","block");

                break;
            case 1:
                $(".relation-center-2-title p").removeClass().addClass("addcolor2");
                $(".relation-center-2-title p:eq(1)").removeClass().addClass("addcolor1");
                $(".relation-center-2").children().css("display","none");
                $(".relation-center-2-title").css("display","block");
                $(".relation-center-2-second").css("display","block");
                $(".relation-center-3").children().css("display","none");
                $(".relation-center-3-second").css("display","block");
                break;
            case 2:
                $(".relation-center-2-title p").removeClass().addClass("addcolor2");
                $(".relation-center-2-title p:eq(2)").removeClass().addClass("addcolor1");
                $(".relation-center-2").children().css("display","none");
                $(".relation-center-2-title").css("display","block");
                $(".relation-center-2-third").css("display","block");
                $(".relation-center-3").children().css("display","none");
                $(".relation-center-3-third").css("display","block");
                break;
            case 3:
                $(".relation-center-2-title p").removeClass().addClass("addcolor2");
                $(".relation-center-2-title p:eq(3)").removeClass().addClass("addcolor1");
                $(".relation-center-2").children().css("display","none");
                $(".relation-center-2-title").css("display","block");
                $(".relation-center-2-four").css("display","block");
                $(".relation-center-3").children().css("display","none");
                $(".relation-center-3-four").css("display","block");
                break;
            case 4:
                $(".relation-center-2-title p").removeClass().addClass("addcolor2");
                $(".relation-center-2-title p:eq(4)").removeClass().addClass("addcolor1");
                $(".relation-center-2").children().css("display","none");
                $(".relation-center-2-title").css("display","block");
                $(".relation-center-2-five").css("display","block");
                $(".relation-center-3").children().css("display","none");
                break;
        }
    });
    if(str==0){
        $(".relation-center-2-title p:eq(0)").trigger("click");
    }
    if(str==1){
        $(".relation-center-2-title p:eq(1)").trigger("click");
    }
    if(str==2){
        $(".relation-center-2-title p:eq(2)").trigger("click");
    }
    if(str==3){
        $(".relation-center-2-title p:eq(3)").trigger("click");
    }
    if(str==4){
        $(".relation-center-2-title p:eq(4)").trigger("click");
    }
});

//news-center
$(document).ready(function(){

    //点击切换功能
    $(".news-center-2-second").css("display","none");
    $(".news-center-2-third").css("display","none");
    $(".news-center-2-four").css("display","none");
    $(".news-center-2-title p").click(function(event){
        var newsNum = $(event.target).index();
        switch (newsNum){
            case 0:
                $(".news-center-2-content").children().css("display","none");
                $(".news-center-2-first").css("display","block");
                $(".news-center-2-title p").removeClass().addClass("addcolor2");
                $(".news-center-2-title p:eq(0)").removeClass().addClass("addcolor1");
                break;
            case 1:
                $(".news-center-2-content").children().css("display","none");
                $(".news-center-2-second").css("display","block");
                $(".news-center-2-title p").removeClass().addClass("addcolor2");
                $(".news-center-2-title p:eq(1)").removeClass().addClass("addcolor1");
                break;
            case 2:
                $(".news-center-2-content").children().css("display","none");
                $(".news-center-2-third").css("display","block");
                $(".news-center-2-title p").removeClass().addClass("addcolor2");
                $(".news-center-2-title p:eq(2)").removeClass().addClass("addcolor1");
                break;
            case 3:
                $(".news-center-2-content").children().css("display","none");
                $(".news-center-2-four").css("display","block");
                $(".news-center-2-title p").removeClass().addClass("addcolor2");
                $(".news-center-2-title p:eq(3)").removeClass().addClass("addcolor1");
                break;
        }
    });

    //全选按钮功能
    $(".news-center-2-choice input").click(function(){
        if ($(".news-center-2-choice input[type=checkbox]").is(":checked")){
            $(".news-center-2-show input[type=checkbox]").each(function(){
                $(this).attr("checked","true");
            });
        
        }
        else{
            $(".news-center-2-show input[type=checkbox]").each(function(){
                $(this).removeAttr("checked");
            });
        }
    });    
});

//money-recharge
$(document).ready(function(){
    //选择背景图像
    $(".recharge-center-2-first .money-ca").click(function(event){
        $(event.target).siblings().removeClass("addbackimg");
        $(event.target).addClass("addbackimg");
    })
    //切换按钮
    $(".recharge-center-2-title p:eq(1)").click(function(){
        $(".recharge-center-2-content2").css("display","none");
        $(".recharge-center-2-content1").css("display","block");
        $(".recharge-center-2-title p:eq(1)").removeClass().addClass("addcolor1");
        $(".recharge-center-2-title p:eq(2)").removeClass().addClass("addcolor2");
    });
     $(".recharge-center-2-title p:eq(2)").click(function(){
        $(".recharge-center-2-content1").css("display","none");
        $(".recharge-center-2-content2").css("display","block");
        $(".recharge-center-2-title p:eq(2)").removeClass().addClass("addcolor1");
        $(".recharge-center-2-title p:eq(1)").removeClass().addClass("addcolor2");
    });
})
