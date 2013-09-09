$(function() {
  $('#search').liveUpdate('.table');
  $('#search').on('keyup', function(event){
    var term = $(this).val();
    console.log(term);
    $('.table li').removeHighlight();
    $('.table li').highlight(term);
  });

  $('#search').on('blur', function(event) {
    if($(this).val() ==''){
      $('.totals-bar').removeClass('stick');
    } 
  });

  $('li.multi').click(function() {

    var target = $(this);
    var active = 'ul.wayfinder li.active'; 

    if (target.find(active).is(':last-child')) {
      console.log('you found the last one!');
      target.find(active).removeClass();
      target.find('ul.wayfinder li:first').addClass('active');
      target.find('p.active').removeClass();
      target.find('p:first-of-type').addClass('active');
    } else {
      console.log('not the last one');
      target.find(active).removeClass().next('li').addClass('active');
      target.find('p.active').removeClass().next('p').addClass('active');
    }

  });

$('.totals-bar').on('mouseleave', function(event){
  if($('#search').val() == ''){
    $(this).removeClass('stick');
    console.log('mouse has left');
  } else {
    $(this).addClass('stick');
    console.log('uh oh');
  }
});

$('.pushpin a').on('click', function(event){ 
  $(this).toggleClass('active');
  $('.totals-bar').toggleClass('pinned')
});

});
