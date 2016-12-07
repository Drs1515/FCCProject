$(document).ready(function() {
  
  $(".selLabel").click(function () {
    $('.dropdown').toggleClass('active');
  });
  
  // $(".dropdown-list li").click(function() {
  //   $('.selLabel').text($(this).text());
  //   $('.dropdown').removeClass('active');
  //   $('.selected-item p span').text($('.selLabel').text());
  // });
  
});

// 利用 data-scroll 属性，滚动到任意 dom 元素
$.scrollto = function (scrolldom, scrolltime) {
    $(scrolldom).click(function () {
        var scrolltodom = $(this).attr("data-scroll");
        $(this).addClass("active").siblings().removeClass("active");
        $('html, body').animate({
            scrollTop: $(scrolltodom).offset().top
        }, scrolltime);
        return false;
    });
};
// 判断位置控制 返回顶部的显隐
if ($(window).width() > 800) {
    var backTo = $("#back-to-top");
    var backHeight = $(window).height() - 980 + 'px';
    $(window).scroll(function () {
        if ($(window).scrollTop() > 700 && backTo.css('top') === '-900px') {
            backTo.css('top', backHeight);
        }
        else if ($(window).scrollTop() <= 700 && backTo.css('top') !== '-900px') {
            backTo.css('top', '-900px');
        }
    });
}
// 启用
$.scrollto("#back-to-top", 800);