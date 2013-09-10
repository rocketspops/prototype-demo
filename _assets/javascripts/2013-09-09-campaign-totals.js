$(function() {
  
  updateContractedImps();
  updateContractedClicks();
  updateEstLoss();
  updateDeliveredImps();
  updateDeliveredClicks();

  $('#search').liveUpdate('.table');

  $('#search').on('keyup', function(event){
    var term = $(this).val();
    $('.table li').removeHighlight();
    $('.table li').highlight(term);
    updateContractedImps();
    updateContractedClicks();
    updateEstLoss();
    updateDeliveredImps();
    updateDeliveredClicks();
    $('.table li').removeClass('no-border');
    $('.table li:not(.hidden):first').addClass('no-border');
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
      target.find(active).removeClass();
      target.find('ul.wayfinder li:first').addClass('active');
      target.find('p.active').removeClass('active');
      target.find('p:first-of-type').addClass('active');
    } else {
      target.find(active).removeClass().next('li').addClass('active');
      target.find('p.active').removeClass('active').next('p').addClass('active');
    }

  });

$('.totals-bar').on('mouseleave', function(event){
  if($('#search').val() == ''){
    $(this).removeClass('stick');
  } else {
    $(this).addClass('stick');
  }
});

$('.pushpin a').on('click', function(event){ 
  $(this).toggleClass('active');
  $('.totals-bar').toggleClass('pinned')
  return false;
});

});

addCommas = function(input){
  // If the regex doesn't match, `replace` returns the string unmodified
  return (input.toString()).replace(
    // Each parentheses group (or 'capture') in this regex becomes an argument 
    // to the function; in this case, every argument after 'match'
    /^([-+]?)(0?)(\d+)(.?)(\d+)$/g, function(match, sign, zeros, before, decimal, after) {

      // Less obtrusive than adding 'reverse' method on all strings
      var reverseString = function(string) { return string.split('').reverse().join(''); };

      // Insert commas every three characters from the right
      var insertCommas  = function(string) { 

        // Reverse, because it's easier to do things from the left
        var reversed           = reverseString(string);

        // Add commas every three characters
        var reversedWithCommas = reversed.match(/.{1,3}/g).join(',');

        // Reverse again (back to normal)
        return reverseString(reversedWithCommas);
      };

      // If there was no decimal, the last capture grabs the final digit, so
      // we have to put it back together with the 'before' substring
      return sign + (decimal ? insertCommas(before) + decimal + after : insertCommas(before + after));
    }
  );
};

updateContractedClicks = function() {
  var clicksTotal = 0;
  var clicksLength = $('.table li:not(.hidden) .contracted.clicks').length;

  if (clicksLength === 0) {
    clicksTotal = 0;
    $('.contract .clicks .num').text(clicksTotal);
  } else {
    $('.table li:not(.hidden) .contracted.clicks').each(function(index) {
      var value = $(this).text();
      value = value.replace(/,/g, "");
      clicksTotal += parseInt(value);
    });
    $('.contract .clicks .num').text(addCommas(clicksTotal));
  }

}

updateContractedImps = function() {

  var impsTotal = 0;
  var impsLength = $('.table li:not(.hidden) .contracted.imps').length;

  if (impsLength === 0) {
    impsTotal = 0;
    $('.contract .imps .num').text(impsTotal);
  } else {
    $('.table li:not(.hidden) .contracted.imps').each(function(index) {
      var value = $(this).text();
      value = value.replace(/,/g, "");
      impsTotal += parseInt(value);
    });
    $('.contract .imps .num').text(addCommas(impsTotal));
  }

}

updateEstLoss = function() {

  var estLossTotal = 0;
  var estLossLength = $('.table li:not(.hidden) .loss').length;
  console.log(estLossLength);

  if (estLossLength === 0) {
    estLossTotal = 0;
    $('.single.loss .num').text(estLossTotal);
    console.log("est. loss length = 0");
  } else {
    $('.table li:not(.hidden) .loss').each(function(index) {
      var value = $(this).text();
      value = value.replace(/[^0-9]/g, "");
      estLossTotal += parseInt(value);
    });
    $('.single.loss .num').text("$" + addCommas(estLossTotal));
  }

}

updateDeliveredClicks = function() {
  var clicksDelvTotal = 0;
  var clicksDelvLength = $('.table li:not(.hidden) .delivered.clicks').length;

  if (clicksDelvLength === 0) {
    clicksDelvTotal = 0;
    $('.delivered .clicks .num').text(clicksDelvTotal);
  } else {
    $('.table li:not(.hidden) .delivered.clicks').each(function(index) {
      var value = $(this).text();
      value = value.replace(/,/g, "");
      clicksDelvTotal += parseInt(value);
    });
    $('.delivered .clicks .num').text(addCommas(clicksDelvTotal));
  }

}

updateDeliveredImps = function() {

  var impsDelvTotal = 0;
  var impsDelvLength = $('.table li:not(.hidden) .delivered.imps').length;

  if (impsDelvLength === 0) {
    impsDelvTotal = 0;
    $('.delivered .imps .num').text(impsDelvTotal);
  } else {
    $('.table li:not(.hidden) .delivered.imps').each(function(index) {
      var value = $(this).text();
      value = value.replace(/,/g, "");
      impsDelvTotal += parseInt(value);
    });
    $('.delivered .imps .num').text(addCommas(impsDelvTotal));
  }

}
