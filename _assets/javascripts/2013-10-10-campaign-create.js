$(function() {

  $('.new-campaign-button').on('click', function() {
    $('.overlay').show();
    $(this).addClass('s-is-hidden');
    return false;
  });

  $('.new-campaign-button').on('click', function() {
    $('.header').toggleClass('header--new-campaign-bg');
  });

  $('.overlay__close, #cancel-campaign, #create-campaign').on('click', function() {
    $('.overlay').hide();
    $('.header').toggleClass('header--new-campaign-bg');
    $('.new-campaign-button').removeClass('s-is-hidden');
    return false;
  });

  $('.flight-dates').on('click', '.i-calendar', function(event) {
    var targetIcon = $(this);
    var flightDatesOffset = $(this).parents('li').offset();
    var DatepickerTopPosition = flightDatesOffset.top - 65;
    var classAssignment = $(this).attr('data-type');

    $('.i-calendar').not($(this)).removeClass('toggled');
    $(this).toggleClass('toggled');
    $('#datepicker').removeClass().css('top', DatepickerTopPosition);

    if (targetIcon.hasClass('toggled')) {
      $('#datepicker').addClass(classAssignment);
      targetIcon.addClass('i-calendar--clicked');
    } else {
      $('#datepicker').removeClass();
      $('.i-calendar').removeClass('i-calendar--clicked');
    }
    
  });

  $('.flight-dates').on('blur', '.i-calendar', function(event) {
    $('#datepicker').removeClass();
    $('.i-calendar').removeClass('i-calendar--clicked');
  });

  $(window).resize(function() {
    var flightDatesOffset = $('.flight-date').offset();
    var accountTeamOffset = $('.account-team').offset();

    var DatepickerTopPosition = flightDatesOffset.top - 65;
    var accountTeamMenuTopPosition = accountTeamOffset.top + 53;
    var accountTeamMenuLeftPosition = accountTeamOffset.left;

    $('#datepicker').css('top', DatepickerTopPosition);
    $('.ui-autocomplete').css({'top' : accountTeamMenuTopPosition, 'left' : accountTeamMenuLeftPosition});
  });

  $('ul.flight-date').on("click", "li a", function() {
    $(this).closest('li').remove();
    return false;
  });

  $('#add-flight-date').click(function() {
    $('ul.flight-date').append('
        <li>
          <div class="date-range">
            <span tabindex="0" data-type="start" class="i-calendar"></span>
            <input class="form__input form__datepicker" placeholder="Start" id="js-input" type="text" />
          </div>
          <span class="range">&ndash;</span>
          <div class="date-range">
            <span tabindex="0" data-type="end" class="i-calendar"></span>
            <input class="form__input form__datepicker" placeholder="End" id="js-input" type="text" />
          </div>
          <a href="#" class="close"></a>
        </li>');
    return false;
  });

  $(document).bind('keydown', function(e) {
    if (e.which == 13) {
      var inputVal = $('#js-input').val();
      if (inputVal) { 
         $('.tag-group').append('<span class="tag">' + inputVal + '<a href="#" class="close"></a></span>');
         $('.auto-search').val('');
         $('.tag-group').addClass('open');
      };
    }
  });

  $('.tag-group').on('click', '.tag > .close', function() {
    var target = $(this).parent();
    if ($('.tag-group').children().length === 1) {
      $('.tag-group').removeClass('open');
      target.parents('div').prev().children('input').removeClass('is-adjacent');
      target.remove();
    } else {
      target.remove();
      $('.auto-search').val('');
    }
  });

  var team = [
    { value: "Andrew Graf",    name: "Andrew Graf" },
    { value: "Billy Whited",   name: "Billy Whited" },
    { value: "Corey Burrows",  name: "Corey Burrows" },
    { value: "Dave Castleton", name: "Dave Castleton" },
    { value: "Laren Furey",    name: "Laren Furey" },
    { value: "Liz Roller",     name: "Liz Roller" },
    { value: "Matt Nolker",    name: "Matt Nolker" },
    { value: "Nick Nieman",    name: "Nick Nieman" },
    { value: "Tiffany Wood",   name: "Tiffany Wood" }
  ];


  //---- Collection

  var collectionAutoComplete = $('.auto-search.collection').autocomplete({ 
    minLength: 0,
    select: function( event, ui ) {
      $('.tag-group').addClass('open').append('<span class="tag">' + ui.item.name + '<a href="#" class="close"></a></span>');
      $(this).addClass('is-adjacent').val(''); 
      return false;
    },
    source: function (request, response) {
      var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
      var matching = $.grep(team, function (value) {
        var name = value.name;
        return matcher.test(name);
      });
      response(matching);
    }
    }).on("focus", function () {
      $(this).autocomplete("search", this.value);
    });

  collectionAutoComplete.data( "ui-autocomplete" )._renderItem = function( ul, item ) {
    var term = this.element.val(),
        itemName = item.name.replace( new RegExp(term, 'i'), "<b>$&</b>" );
    return $("<li>")
      .append($("<a></a>").html("<p class='name'>" + itemName + "</p>"))
      .appendTo(ul);
  };

  //---- Unique

  var uniqueAutoComplete = $('.auto-search.unique').autocomplete({ 
    minLength: 0,
    select: function( event, ui ) {
      $(this).blur(); 
      $('input.start').focus();
    },
    source: function (request, response) {
      var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
      var matching = $.grep(team, function (value) {
        var name = value.name;
        return matcher.test(name);
      });
      response(matching);
    }
    }).on("focus", function () {
      $(this).autocomplete("search", this.value);
    });

  uniqueAutoComplete.data( "ui-autocomplete" )._renderItem = function( ul, item ) {
    var term = this.element.val(),
        itemName = item.name.replace( new RegExp(term, 'i'), "<b>$&</b>" );
    return $("<li>")
      .append($("<a></a>").html("<p class='name'>" + itemName + "</p>"))
      .appendTo(ul);
  };

  $('.auto-search').on("click", function() {
    target = $(this);  
    if (target.is(':focus')) { 
      target.autocomplete("search", this.value);
    }
  });

});
