$(function() {

var campaigns = [
{
  value: "04/01/13 - 06/30/13",
  name: "04/01/13 - 06/30/13",
  id: "MIRAVAL002"
},
{
  value: "Miracle Ear",
  name: "Miracle Ear",
  id: "LIFTCOMIRACLEEAR003"
},
{
  value: "Miracle Ear",
  name: "Miracle Ear",
  id: "LIFTCOMIRACLEEAR001"
},
{
  value: "Miracle Ear",
  name: "Miracle Ear",
  id: "LIFTCOMIRACLEEAR005"
},
{
  value: "Children's Miracle Network",
  name: "Children's Miracle Network",
  id: "LIFTMECHILDMIRACLE001"
}
];

$('.quick-search').autocomplete({ 
  source: function (request, response) {
    var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");

    var matching = $.grep(campaigns, function (value) {
      var name = value.name;
      var id = value.id;
      return matcher.test(name) || matcher.test(id);
    });

    response(matching);
  }
  }).data( "ui-autocomplete" )._renderItem = function( ul, item ) {
    var term = this.element.val(),
        itemName = item.name.replace( new RegExp(term, 'i'), "<b>$&</b>" );
        itemID = item.id.replace( new RegExp(term, 'i'), "<b>$&</b>" );
    return $("<li>")
    .append($("<a></a>").html("<p class='name'>" + itemName + "</p><p class='id'>" + itemID + "</p>"))
    .appendTo(ul);
  };
});
