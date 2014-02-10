jQuery(document).ready(function() {
  var Search = {};

  $("#search-button").click(function (e) {
    // open the sidebar
    Search.searchInput = $("#search-input").val();
    Search.route = "/api/v1/search/markets?zipcode=" + Search.searchInput;
    $.getJSON( Search.route, function(data) {
      var list = $(".listings");
      list.empty();
      $.each(data, function(_, market){
        $(list).append('<li><a class="icon icon-data market-item" data-market-id=' + market.id + '>' + market.name + '<p class="smaller"> </p>' + '</a></li>');
      });
    });
  });
});

