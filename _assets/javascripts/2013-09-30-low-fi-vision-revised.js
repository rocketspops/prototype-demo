$(function() {
  $('.onoffswitch-checkbox').change(function() {
    console.log('test');
    $('.dash-nav ul, p.main').toggleClass('active');
  }); 

  $('.dash-nav li a').click(function() {
    var target = $(this).attr('href');
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
    console.log(target);
    $(target).siblings().removeClass('active');
    $(target).addClass('active');
    return false;
  });

});
