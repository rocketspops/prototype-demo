$(function() {
  $('.selected').click(function(){
    $(this).next('li').toggleClass('open');
    $(this).parent().toggleClass('open');
  });

  $('.selectable li').click(function(){
    var newSelectedText = $(this).text();

    $('.contact-menu').toggleClass('open');

    $('.selectable li').removeClass('active');
    $(this).addClass('active');

    $(this).parents('li').toggleClass('open');

    $('.context-menu ul').removeClass('visible');
    $('ul#' + newSelectedText.toLowerCase() + '').addClass('visible');

    $('img').removeClass('visible');
    $('img.' + newSelectedText.toLowerCase() + '').addClass('visible');

    if (newSelectedText == "Operations") {
        $('li.changeable').text('ACURALOUISVILLE005').addClass('id');
      } else {
        $('li.changeable').text('$100,000 budget').removeClass('id');
      }

    setTimeout(function() {
      $('.selected span').text(newSelectedText);

      
    }, 60);

  });

});
