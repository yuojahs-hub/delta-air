// 헤더 스크롤
$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    console.log(scrollTop);

    if (scrollTop > 100) {
        $("#header").addClass("active");
    } else {
        $("#header").removeClass("active");
    }

    if (scrollTop >= 800) {
        $(".top").addClass("opacity");
    } else {
        $(".top").removeClass("opacity");
    }
});

// 모바일 메뉴
// $("#mNav button").click(function () {
//     $("mNav nav").toggleClass("show");
// });

$("#mNav button").click(function () {
    $("#mNav nav").toggleClass("show");
});

// 푸터 메뉴
// $(".firstMenu").click(function () {
//     $(this).next(".footer_dropdown").toggleClass("slide");
// });

$(".firstMenu").click(function () {
    $(this).next(".footer_dropdown").slideToggle(300);
});

// top 버튼
// $(window).scroll(function () {
//     let scrollTop = $(window).scrollTop();
//     if (scrollTop > 800) {
//         $(".top").addClass("show");
//     }
// });
