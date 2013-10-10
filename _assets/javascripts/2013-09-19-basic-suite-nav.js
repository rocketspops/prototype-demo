$(function() {
  $('.selected').click(function(){
    $(this).next('li').toggleClass('open');
    $(this).parent().toggleClass('open');
  });

  $('.selectable li').click(function(){
    var newSelectedText = $(this).text();

    $('.contact-menu').toggleClass('open');

    $(this).parents('li').toggleClass('open');

    $('.context-menu ul').removeClass('visible');
    $('ul#' + newSelectedText.toLowerCase() + '').addClass('visible');

    $('.table-overlay').addClass('visible');

    $('.totals-bar').removeClass('pinned');

   

    setTimeout(function() {
      $('.selected span').text(newSelectedText);
    }, 60);

    //setTimeout(function() {
    //  $('img').removeClass('visible');
    //  $('img.' + newSelectedText.toLowerCase() + '').addClass('visible');
    //  if (newSelectedText == "Operations") {
    //    $('li.changeable').text('ACURALOUISVILLE005').addClass('id');
    //  } else {
    //    $('li.changeable').text('$100,000 budget').removeClass('id');
    //  }
    //}, 200);

    setTimeout(function() {
      $('img').removeClass('visible');
      $('img.' + newSelectedText.toLowerCase() + '').addClass('visible');
      if (newSelectedText == "Operations") {
        $('li.changeable').text('ACURALOUISVILLE005').addClass('id');
      } else {
        $('li.changeable').text('$100,000 budget').removeClass('id');
      }
      $('.selected span').text(newSelectedText);
      $('.table-overlay').removeClass('visible');
      $('.totals-bar.' + newSelectedText.toLowerCase() + '').addClass('pinned');
    }, 500);

  });

});
