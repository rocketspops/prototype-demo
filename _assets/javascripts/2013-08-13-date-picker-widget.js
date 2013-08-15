$(function() {
  toggleCalendarOnClick(); 
  toggleCalendarDropdown();
  updateDateInput(); 
  calendarSelection();
});


var toggleCalendarOnClick = function () {

  $('.calendar-icon').click(function() {

    $(this).toggleClass('s-is-active');
    $('.date-picker').toggleClass('s-is-visible');

    if ($('[class*="-select"]').hasClass('s-is-visible')) {
      hideCalendarDropdown();
    }

    return false;

  });
}

var toggleCalendarDropdown = function () {

  $('[class$="__dropdown"]').click(function() {

    if ($(this).parents().next('[class*="-select"]').hasClass('s-is-visible')) {

      hideCalendarDropdown();

    } 
    else { 

      var target = $(this).parents().next('[class*="-select"]'); 
      var sibling = $(this).parents().siblings('[class*="-select"]'); 
      var activeLiPos = target.find('ul li.s-is-active').position(); 
      
      sibling.removeClass('s-is-visible');
      sibling.find('ul').scrollTo(0);
      target.addClass('s-is-visible');

      if (activeLiPos.top >= 72) { 
        target.find('ul').scrollTo(activeLiPos.top - 72);
      } 
      else {
        target.find('ul').scrollTo(activeLiPos.top);
      }

    }

    return false;

  });

}

var hideCalendarDropdown = function () {

  $('[class*="-select"]').removeClass('s-is-visible');
  $('[class*="-select"] ul').scrollTo(0);

}

var updateDateInput = function () {

  $('.date-select').click(function() {
    var elem = $(this);
    var date = $('.date');
    $(this).parents('div').siblings().find('.date-select').removeClass('s-is-active');
    $(this).toggleClass('s-is-active');
    console.log(elem.parents('div').attr('id'));
    if (elem.hasClass('s-is-active')) {
      switch (elem.parents('div').attr('id')) {
        case 'august':
          date.val('8/30/13');
          break;
        case 'september':
          date.val('9/30/13');
          break;
        case 'october':
          date.val('10/30/13');
          break;
        case 'november':
          date.val('11/30/13');
          break;
        case 'december':
          date.val('12/30/13');
          break;
      }
    } 
    else {
      date.val('');
    }

    setTimeout(function() {
      $('.calendar-icon').click();
    }, 150);

    return false;

  });

}

var calendarSelection = function () {

  var months = $('.month-select ul li').map( function () { return $(this); }); 
  var years = $('.year-select ul li').map( function () { return $(this); }); 

  var activeMonthLi = $('.month-select ul li.s-is-active').index();
  var activeYearLi = $('.year-select ul li.s-is-active').index();


  $(window).keydown(function(e) {   


    var m = activeMonthLi;
    var y = activeYearLi;

    switch ( e.keyCode ) {
      case 27:
        hideCalendarDropdown();
        break;
        // Left/Right keys control months
      case 37:
        m--;
        if (m < 0) { m = months.length - 1; } 
        $('.month .text').text(months[m].text());
        $('.month-select ul li').removeClass('s-is-active');


        var newMonthImg = months[m].text().toLowerCase();
        $('.date-picker__body').removeClass('s-is-visible');
        $('.' + newMonthImg).toggleClass('s-is-visible');

        months[m].addClass('s-is-active');
        activeMonthLi = $('.month-select ul li.s-is-active').index();
        break; 
      case 39:
        m++;
        if (m > months.length - 1) { m = 0; } 
        $('.month .text').text(months[m].text());

        var newMonthImg = months[m].text().toLowerCase();
        $('.date-picker__body').removeClass('s-is-visible');
        $('.' + newMonthImg).toggleClass('s-is-visible');

        $('.month-select ul li').removeClass('s-is-active');
        months[m].addClass('s-is-active');
        activeMonthLi = $('.month-select ul li.s-is-active').index();
        break;
        // Up/Down keys control years
      case 38:
        y--;
        if (y < 0) { y = years.length - 1; } 

        $('.year .text').text(years[y].text());
        $('.year-select ul li').removeClass('s-is-active');

        years[y].addClass('s-is-active');
        activeYearLi = $('.year-select ul li.s-is-active').index();
        break;
      case 40:
        y++;
        if (y > years.length - 1) { y = 0; } 
        
        $('.year .text').text(years[y].text());
        $('.year-select ul li').removeClass('s-is-active');

        years[y].addClass('s-is-active');
        activeYearLi = $('.year-select ul li.s-is-active').index();
        break; 
    }  
  });

  $('[class*="-select"] ul li').click(function() {

    var replacedText = $(this).parents('div').prev('p').find('span.text');
    var newText = $(this).text(); 
    var elem = $(this).parents('div');

    $(this).siblings().removeClass('s-is-active');
    $(this).addClass('s-is-active');

    setTimeout(function() {
      replacedText.text(newText);
      var newMonthImg = newText.toLowerCase();
      hideCalendarDropdown();
      if (elem.is('.month-select')) { 
        $('.date-picker__body').removeClass('s-is-visible');
        $('.' + newMonthImg).toggleClass('s-is-visible'); 
      }
    }, 150);

    activeMonthLi = $('.month-select ul li.s-is-active').index();
    activeYearLi = $('.year-select ul li.s-is-active').index();

    console.log("click month: " + activeMonthLi);
    console.log("click year: " + activeYearLi);

  });

}


