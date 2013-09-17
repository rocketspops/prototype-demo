$(function() {
  
  $('.tooltip-header li').click(function() { 
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    $('.tooltip-sidebar > div').removeClass('active'); 
    if ($(this).text() == "Today") {
      var reset = $('.tooltip-nav li.active a').attr('href');
      $('#sidebar-nav').addClass('active');
      $('#scheduled').removeClass('is-visible');
      $(reset).addClass('is-visible');
    } else {
      $('#sidebar-create').addClass('active');
      $('#scheduled').siblings('div').removeClass('is-visible');
      $('#scheduled').addClass('is-visible');
    }
  });

  $('#schedule-reminder').click(function() {
    $('#sidebar-create').addClass('active');
    $('#scheduled').siblings('div').removeClass('is-visible');
    $('#scheduled').addClass('is-visible');
    $('.tooltip-header li').removeClass('active');
    $('#scheduled-tab').addClass('active');

  });

  $('.tooltip-nav ul li').click(function() { 
    var target = $(this).find('a').attr('href');
    
    $('.tooltip-nav ul li').removeClass('active');
    $(this).addClass('active');

    $(target).siblings('div').removeClass('is-visible');
    $(target).addClass('is-visible');

    $('.tooltip-nav > li').removeClass('locked');
    $(this).parents('li').addClass('locked');

    return false;
  });

  $('.tooltip-nav li').click(function() { 
    var target = $(this);
    var totals = 0;

    target.find('.counter').each(function() {
      var number = parseInt($(this).text(), 10);
      totals += number;
    });
    
    target.find('.total').text(totals);

    if ($(this).find('li').hasClass('active')) {
      console.log('this one has a child with class active');
      $('.tooltip-nav li').removeClass('locked');
      target.addClass('locked');
    } else {
      target.toggleClass('closed');
    }

  });

  $('.to-dos input[type="checkbox"').change(function() {

    $(this).next('label').toggleClass('checked');
    $(this).parent().toggleClass('checked');

    var parentDiv = $(this).parents('div').attr('id');
    var length = $(this).parents('ul').find('li:not(.checked)').length;
    console.log(length);

    if (length > 0) {
      $('a[href="#' + parentDiv + '"').find('.counter').text(length).show(); 
    } else {
      $('a[href="#' + parentDiv + '"').find('.counter').text(length).hide(); 
    }

  });

  $('#scheduled .to-dos').on('click', 'a.delete', function(event) { 
    $(this).parent().remove();
    return false;
  });

  $('#sidebar-create select').focus(function() {
    $(this).find("option:first-child").attr('disabled', 'true'); 
  });

  $('#sidebar-create select').change(function() {
    $(this).addClass('changed');
    $(this).blur();
  });

  $('#sidebar-create select#repeat').change(function() {
    if ($(this).val() == "Weekly") {
      $('#day').addClass('is-visible');
      $('#date').removeClass('is-visible').val('');
    } else if ($(this).val() == "Never") {
       $('#date').addClass('is-visible');
       $('#day').removeClass('is-visible');
    } else if ($(this).val() == "Monthly") {
      $('#date').addClass('is-visible');
      $('#day').removeClass('is-visible');
    } else {
      $('#day').removeClass('is-visible');
      $('#date').val('').removeClass('is-visible');
    }
  });

  $('#js-submit').click(function() { 
    var reminderText = $('#sidebar-create textarea').val();
    var infoText; 

    if (reminderText) {
      console.log(reminderText);
    }

    if ($('#date').val()) {
      infoText = $('#date').val();
    } else {
      infoText = $('#repeat').val();
    }
    
    if ($('#sidebar-create textarea').val()) {
      $('#sidebar-create textarea').removeClass('error');
      if ($('#date.is-visible').val() || $('#day.is-visible').val() || $('#repeat').val() == "Daily" ) {
        $('#scheduled .to-dos').prepend('
          <li>
            <a href="#" class="delete"></a>
            <label>
              <span class="type">' + reminderText + '<span>
            </label>
            <span class="info">' + infoText +'</span>
          </li>
        ');
        $('#repeat, .is-visible').removeClass('error'); 
        $('select').removeClass('changed'); 
        $('textarea, #repeat, .is-visible').val('').removeClass('is-visible'); 
      } else if ($('#repeat').val() == '') {
        $('#repeat').addClass('error'); 
      } else {
        $('.is-visible').addClass('error'); 
      }
    } else {
      $('#sidebar-create textarea').addClass('error');
    }
    return false;
  }); 

  $('.text-delete').click(function() {
    $('#repeat, .is-visible').removeClass('error'); 
    $('select').removeClass('changed'); 
    $('textarea, #repeat, .is-visible').val('').removeClass('is-visible'); 
  });

});
