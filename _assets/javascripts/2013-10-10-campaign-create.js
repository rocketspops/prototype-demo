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

  $('.overlay__nav li').click(function() {

    var targetTab = $(this).attr('data-tab');

    $(this).siblings().removeClass('s-is-current');
    $(this).addClass('s-is-current');

    $('.tab').removeClass('is-visible');
    $(targetTab).addClass('is-visible');

    return false;
  });

  $('.next').click(function() {
    var nextTab = $(this).parents('.tab').next('.tab').attr('id');
    var targetHash = "#" + nextTab;
    $('.overlay__nav li').removeClass('s-is-current');
    $('.overlay__nav li[data-tab="' + targetHash +'"]').addClass('s-is-current');
    $('.tab').removeClass('is-visible');
    $(targetHash).addClass('is-visible');
    return false;
  });

  $('.create').click(function() {
 
    if( $('input.required').val() === '' ) {
      console.log('you did not fill out all fields');
      $('.required').addClass('error');
    } else {
      $('.required').addClass('error');
      $('.overlay').hide();
    }
      
    return false;
  });


  $('.back').click(function() {
    var backTab = $(this).parents('.tab').prev('.tab').attr('id');
    var targetHash = "#" + backTab;
  
    $('.overlay__nav li').removeClass('s-is-current');
    $('.overlay__nav li[data-tab="' + targetHash +'"]').addClass('s-is-current');

    $('.tab').removeClass('is-visible');
    $(targetHash).addClass('is-visible');
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
      $('#datepicker-overlay').addClass('open');
      targetIcon.addClass('i-calendar--clicked');
    } else {
      $('#datepicker, #datepicker-overlay').removeClass();
      $('.i-calendar').removeClass('i-calendar--clicked');
    }
    
  });

  $('#datepicker').click(function() {
    if($(this).hasClass('start')) {
      $('input.start').val('10/15/13').focus();
    } else {
      $('input.end').val('12/22/13').focus();
    }
    $('.i-calendar').removeClass('i-calendar--clicked toggled');
    $(this).removeClass();
  });

  $('#datepicker-overlay').click(function() {
      $('#datepicker').removeClass();
      $('.i-calendar').removeClass('i-calendar--clicked toggled');
      $(this).removeClass();
  });

  $(window).resize(function() {

    var flightDatesOffset = $('.flight-date').offset();
    $('#datepicker').css({'top': flightDatesOffset.top - 65});

    var accountTeamOffset = $('input.team').offset();
    $('.ui-autocomplete.team').css({'top' : accountTeamOffset.top + 30, 'left' : accountTeamOffset.left});

    var clientOffset = $('input.client').offset();
    $('.ui-autocomplete.client').css({'top' : clientOffset.top + 30, 'left' : clientOffset.left});

    var clientOffset = $('input.geo').offset();
    $('.ui-autocomplete.geo').css({'top' : clientOffset.top + 30, 'left' : clientOffset.left});

    var clientOffset = $('input.category').offset();
    $('.ui-autocomplete.category').css({'top' : clientOffset.top + 30, 'left' : clientOffset.left});

    var clientOffset = $('input.platform').offset();
    $('.ui-autocomplete.platform').css({'top' : clientOffset.top + 30, 'left' : clientOffset.left});

    var clientOffset = $('input.type').offset();
    $('.ui-autocomplete.type').css({'top' : clientOffset.top + 30, 'left' : clientOffset.left});

    var clientOffset = $('input.size').offset();
    $('.ui-autocomplete.size').css({'top' : clientOffset.top + 30, 'left' : clientOffset.left});

    var clientOffset = $('input.positioning').offset();
    $('.ui-autocomplete.positioning').css({'top' : clientOffset.top + 30, 'left' : clientOffset.left});

  });

  $('ul.flight-date').on("click", "li a", function() {
    $(this).closest('li').remove();
    return false;
  });

  $('#add-flight-date').click(function() {
    $('ul.flight-date').append('
        <li>
          <div class="date-range">
            <span tabindex="0" data-type="start" class="i-calendar font-icon">calendar</span>
            <input class="form__input form__datepicker" placeholder="Start" id="js-input" type="text" />
          </div>
          <span class="range">&ndash;</span>
          <div class="date-range">
            <span tabindex="0" data-type="end" class="i-calendar font-icon">calendar</span>
            <input class="form__input form__datepicker" placeholder="End" id="js-input" type="text" />
          </div>
          <a href="#" class="close font-icon">close</a>
        </li>');
    return false;
  });

  //$(document).bind('keydown', function(e) {
  //  if (e.which == 13) {
  //    var target = $('.auto-search:focus');
  //    var inputVal = $('.auto-search:focus').val();
  //    console.log(inputVal);
  //    if (inputVal && target.hasClass('collection')) { 
  //       target.parent().next('.tag-group').addClass('open').append('<span class="tag">' + inputVal + '<a href="#" class="close"></a></span>');
  //       $('.auto-search').val('');
  //    };
  //  }
  //});

  $('.tag-group').on('click', '.tag > .close', function() {

    var target      = $(this).parent();
    var parentDiv   = $(this).parents('.tag-group'); 
    var inputTarget = $(this).parents('div').prev().children('input');

    if (parentDiv.children().length <= 1) {
      parentDiv.removeClass('open');
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
    return false;
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
      { value: "Amtrak",  name: "Amtrak" },
      { value: "Hyundai",  name: "Hyundai" },
      { value: "Oklahoma City CVB",  name: "Oklahoma City CVB" },
      { value: "CitraNatal Vitamins",  name: "CitraNatal Vitamins" },
      { value: "McDonalds",  name: "McDonald's" },
      { value: "Veggie Tales",  name: "Veggie Tales" },
      { value: "Oakland Nursery",  name: "Oakland Nursery" },
      { value: "Charter Communications",  name: "Charter Communications" },
      { value: "Wisconsin Lottery",  name: "Wisconsin Lottery" }
    ],
    geo: [
      { value: "National",  name: "National" },
      { value: "New York - Northern New Jersey-Long Island, NY-NJ-PA",  name: "New York - Northern New Jersey-Long Island, NY-NJ-PA" },
      { value: "Los Angeles-Long Beach-Santa Ana, CA",  name: "Los Angeles-Long Beach-Santa Ana, CA" },
      { value: "Chicago-Naperville-Joliet, IL-IN-WI",  name: "Chicago-Naperville-Joliet, IL-IN-WI" },
      { value: "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD",  name: "Philadelphia-Camden-Wilmington, PA-NJ-DE-MD" },
      { value: "Dallas-Fort Worth-Arlington, TX",  name: "Dallas-Fort Worth-Arlington, TX" },
      { value: "Miami-Fort Lauderdale-Miami Beach, FL",  name: "Miami-Fort Lauderdale-Miami Beach, FL" },
      { value: "Houston-Sugar Land Baytown, TX",  name: "Houston-Sugar Land Baytown, TX" },
      { value: "Washington-Arlington-Alexandria, DC-VA-MD-WV",  name: "Washington-Arlington-Alexandria, DC-VA-MD-WV" }
    ],
    category: [
      { value: "Automotive",  name: "Automotive" },
      { value: "Baseball",  name: "Baseball" },
      { value: "B2B",  name: "B2B" },
      { value: "Blogs",  name: "Blogs" },
      { value: "Celebrity Gossip",  name: "Celebrity Gossip" },
      { value: "Entertainment",  name: "Entertainment" },
      { value: "News and Entertainment",  name: "News and Entertainment" },
      { value: "Home Entertainment",  name: "Home Entertainment" },
      { value: "Sports",  name: "Sports" },
      { value: "Shopping",  name: "Shopping" }
    ],
    platform: [
      { value: "Desktop",  name: "Desktop" },
      { value: "Mobile",  name: "Mobile" },
      { value: "Tablet",  name: "Tablet" }
    ],
    type: [
      { value: "Display",  name: "Display" },
      { value: "Video",  name: "Video" },
      { value: "Game",  name: "Game" }
    ],
    size: [
      { value: "Banner",  name: "Banner" },
      { value: "160x600",  name: "160x600" },
      { value: "728x90",  name: "728x90" },
      { value: "300x250",  name: "300x250" },
      { value: "250x250",  name: "250x250" },
      { value: "Sliding Billboard",  name: "Sliding Billboard" },
      { value: "Global Take Over",  name: "Global Take Over" }
    ],
    positioning: [
      { value: "Homepage",  name: "Homepage" },
      { value: "Sports",  name: "Sports" },
      { value: "Above the fold",  name: "Above the fold" },
      { value: "Shopping",  name: "Shopping" }
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
      $(this).parent().next('.tag-group').addClass('open').append('<span class="tag">' + ui.item.name + '<a href="#" class="close font-icon">close</a></span>');
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
      $(this).parent().next('.tag-group').addClass('focus');
      $(this).autocomplete("search", this.value);
      $('.m-form__dropdown').removeClass('s-is-open').blur();
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
      var target = ui.item.value;
      var abbr = target.slice(0,7).replace(/\s+/g, '').toUpperCase();
      $(this).addClass('psuedo-focus'); 

      if( $(this).hasClass('client') ) { 

        var chars = "0123456789";
        var string_length = 3;
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
          var rnum = Math.floor(Math.random() * chars.length);
          randomstring += chars.substring(rnum,rnum+1);
        }

        $('#unique-id').val(abbr + randomstring.toUpperCase());
      }
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
      $(this).removeClass('psuedo-focus'); 
      $(this).autocomplete("search", this.value);
      $('.m-form__dropdown').removeClass('s-is-open').blur();
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

  $('.auto-search.client').on("blur", function() {
    var targetValue = $(this).val(); 
    if ( targetValue === '' ) {
      $('#unique-id').val('');
    }
  });

  // Hacked together JS for custom CSS dropdowns

  $('[class*="m-form__dropdown"]').each( function () {
    $(this).find('li:first a').addClass('s-is-active');
    //$(this).find('span').text($(this).find('li:first a').text());
  })

  $('.m-form__dropdown__overlay').click(function() { 
    $('.m-form__dropdown').removeClass('s-is-open').blur();
    return false;
  });

  $('.m-form__dropdown').focus(function() { 
    $('.m-form__dropdown').not($(this)).removeClass('s-is-open');
    $(this).addClass('s-is-open');
    return false;
  });


  $('[class*="m-form__dropdown"] li a').click(function() { 
    var target = $(this);
    var optionText = $(this).text();
    $(this).parents('[class*="m-form__dropdown"]').find('a').removeClass();
    $(this).addClass('s-is-active');
    setTimeout(function() {
      target.parents('[class*="m-form__dropdown"]').find('span').text(optionText).removeClass('placeholder');
      target.parents('.m-form__dropdown').removeClass('s-is-open');
    }, 50);
    return false;
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
  //var test = $('#unique-id').parent().prev('.form-field').find('input').val();
  //console.log(test);


}

