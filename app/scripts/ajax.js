$(document).ready(function () {
  $.getJSON( "ajax/fortune.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<div='" + key + "'>" + val + "</div>" );
    });

    $( "<ul/>", {
      "class": "Your fortune is:",
      html: items.join( "/fortune" )
    }).appendTo( "body" );
  });
