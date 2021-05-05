$(".hamburger").click(function() {
    $(".navigation").toggleClass("active");
    $(".line-1").toggleClass("rotate-line-1");
    $(".line-3").toggleClass("rotate-line-2");
    $(".line-2").toggleClass("remove-line-3");
});