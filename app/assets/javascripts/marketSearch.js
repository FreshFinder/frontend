jQuery(document).ready(function() {
  var Search = {};

  Search.performSearch = function() {
    var container = $('.st-container');
    container.addClass('st-menu-open');
    container.addClass('st-effect-2');

    Search.searchInput = $("#search-input").val();
    Search.route = "/api/v1/search/markets?zipcode=" + Search.searchInput;
    $.getJSON( Search.route, function(data) {
      var list = $(".listings");
      list.empty();
      $.each(data, function(_, market){
        $(list).append('<li><a class="icon icon-data market-item" data-market-id=' + market.id + '>' + market.name + '<p class="smaller"> </p>' + '</a></li>');
      });
    });
    Search.addCloseListeners();
  };

  Search.addCloseListeners = function() {
    var container = $('.st-container');
    $(".st-pusher").click(function (e) {
      console.log("boom from the closed burger")
      container.removeClass('st-menu-open');
    });
  };

  $("#search-button").click(function (e) {
    Search.performSearch();
  });

  $("#search-input").keypress(function (e) {
    if (e.keyCode == 13) {
      Search.performSearch();
    };
  });

});

