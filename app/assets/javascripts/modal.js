var Modal = {};
Modal.addModalListener = function(payment, products, market_data, val){
  var market = market_data.market
  for( i = 0; i < market.payment_types.length; i++) {
    payment.push(val.payment_types[i]);
  };

  for( i = 0; i < market.products.length; i++) {
    products.push(val.products[i]);
  };
   var html = '<h3 class="name">' + market.name + '</h3>' + '<div><hr>' +
'<div class="address">' + market.address.street + '</br>' + market.address.city + ', ' + market.address.state + '</div>' +
'<div class="payments"><img src="assets/payment.png">' + payment.join(' ✤ ') + '<img src="assets/payment.png"></div>' + '<div class="products"><img src="assets/product.png">' + products.join(' ✿  ') + '<img src="assets/product.png"></div>';

  $(".md-content").html(html);
  $("#modal").show();
  $(".modal-close").click(function (e){
    $('#modal').hide();
  });
};

