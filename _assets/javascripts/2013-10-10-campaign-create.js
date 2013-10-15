$(function() {
  
  randomString();

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

  $('#datepicker').click(function() {
    if($(this).hasClass('start')) { 
      $('input.start').val('10/15/13').focus();
    } else {
      $('input.end').val('12/22/13').focus();
    }
  });


  $('.flight-dates').on('blur', '.i-calendar', function(event) {
    setTimeout(function() {
      $('#datepicker').removeClass();
      $('.i-calendar').removeClass('i-calendar--clicked toggled');
    }, 25);
  });

  $(window).resize(function() {

    var flightDatesOffset = $('.flight-date').offset();
    $('#datepicker').css({'top': flightDatesOffset.top - 65});

    var accountTeamOffset = $('input.team').offset();
    $('.ui-autocomplete.team').css({'top' : accountTeamOffset.top + 30, 'left' : accountTeamOffset.left});

    var clientOffset = $('input.client').offset();
    $('.ui-autocomplete.client').css({'top' : clientOffset.top + 30, 'left' : clientOffset.left});

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

  //$(document).bind('keydown', function(e) {
  //  if (e.which == 13) {
  //    var inputVal = $('#js-input').val();
  //    if (inputVal) { 
  //       $('.tag-group').append('<span class="tag">' + inputVal + '<a href="#" class="close"></a></span>');
  //       $('.auto-search').val('');
  //       $('.tag-group').addClass('open');
  //    };
  //  }
  //});

  $('.tag-group').on('click', '.tag > .close', function() {
    var target = $(this).parent();
    var inputTarget = $(this).parents('div').prev().children('input');
    if ($('.tag-group').children().length === 1) {
      $('.tag-group').removeClass('open');
      inputTarget.removeClass('is-adjacent');
      inputTarget.autocomplete("option", { minLength: 1 });
      inputTarget.focus();
      inputTarget.autocomplete("option", { minLength: 0 });
      target.remove();
      inputTarget.addClass('psuedo-focus');
    } else {
      inputTarget.autocomplete("option", { minLength: 1 });
      inputTarget.focus();
      inputTarget.autocomplete("option", { minLength: 0 });
      target.remove();
    }
  });

  var dataSources = { 
    team: [
      { value: "Andrew Graf",    name: "Andrew Graf" },
      { value: "Billy Whited",   name: "Billy Whited" },
      { value: "Corey Burrows",  name: "Corey Burrows" },
      { value: "Dave Castleton", name: "Dave Castleton" },
      { value: "Lauren Furey",   name: "Laren Furey" },
      { value: "Liz Roller",     name: "Liz Roller" },
      { value: "Matt Nolker",    name: "Matt Nolker" },
      { value: "Nick Nieman",    name: "Nick Nieman" },
      { value: "Tiffany Wood",   name: "Tiffany Wood" }
    ],
    client: [
      { value: "Client 1",  name: "Client 1" },
      { value: "Client 2",  name: "Client 2" },
      { value: "Client 3",  name: "Client 3" },
      { value: "Client 4",  name: "Client 4" },
      { value: "Client 5",  name: "Client 5" },
      { value: "Client 6",  name: "Client 6" },
      { value: "Client 7",  name: "Client 7" },
      { value: "Client 8",  name: "Client 8" },
      { value: "Client 9",  name: "Client 9" }
    ]
  }

  //---- Collection

  var collectionAutoComplete = $('.auto-search.collection').autocomplete({ 
    minLength: 0,
    open: function( event, ui ) {
      $(this).data('ui-autocomplete').menu.element.addClass($(this).attr('data-context'));
    },
    close: function( event, ui ) {
      $(this).data('ui-autocomplete').menu.element.removeClass($(this).attr('data-context'));
    },
    select: function( event, ui ) {
      $('.tag-group').addClass('open').append('<span class="tag">' + ui.item.name + '<a href="#" class="close"></a></span>');
      $(this).addClass('is-adjacent').val(''); 
      return false;
    },
    source: function (request, response) {
      var source = this.element.attr('data-context');
      var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
      var matching = $.grep(dataSources[source], function (value) {
        var name = value.name;
        return matcher.test(name);
      });
      response(matching);
    }
    }).on("focus", function () {
      $('.tag-group').addClass('focus');
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
    open: function( event, ui ) {
      $(this).data('ui-autocomplete').menu.element.addClass($(this).attr('data-context'));
      $(this).removeClass('psuedo-focus');
    },
    close: function( event, ui ) {
      $(this).data('ui-autocomplete').menu.element.removeClass($(this).attr('data-context'));
    },
    select: function( event, ui ) {
      $(this).addClass('psuedo-focus'); 
    },
    source: function (request, response) {
      var source = this.element.attr('data-context');
      var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
      var matching = $.grep(dataSources[source], function (value) {
        var name = value.name;
        console.log(name.length);
        return matcher.test(name);
      });
        
      response(matching);
    }
    }).on("focus", function () {
      $(this).removeClass('psuedo-focus'); 
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
      $(this).removeClass('psuedo-focus');
    }
  });

  $('.auto-search.collection').on("blur", function() {
    $('.tag-group').removeClass('focus');
  });

});


function randomString() {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  var string_length = 10;
  var randomstring = '';
  for (var i=0; i<string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
  }

  $('#unique-id').val(randomstring.toUpperCase());

}
