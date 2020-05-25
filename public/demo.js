$(document).ready(function () {
    $('.menucon ul li:nth-child() a').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop:$('.test1').offset().top-10}, 1000);
    });
});
$(window).scroll(function () { 
    if($(this).scrollTop()>100){
        $('.nuttop').addClass('hientop');
    }
    else{
        $('.nuttop').removeClass('hientop');
    }
});