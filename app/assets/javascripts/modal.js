var Modal = {};
Modal.addModalListener = function(payment, products, market_data, val){
  for( i = 0; i < market_data[0].payment_types.length; i++) {
    payment.push(val.payment_types[i].name);
  };

  for( i = 0; i < market_data[0].products.length; i++) {
    products.push(val.products[i].name);
  };
   var html = '<h3 class="name">' + market_data[0].name + '</h3>' + '<div><hr>' +
'<div class="address">' + market_data[0].address.street + '</br>' + market_data[0].address.city + ', ' + market_data[0].address.state + '</div>' +
'<div class="payments"><img src="assets/payment.png">' + payment.join(' ✤ ') + '<img src="assets/payment.png"></div>' + '<div class="products"><img src="assets/product.png">' + products.join(' ✿  ') + '<img src="assets/product.png"></div>';

  $(".md-content").html(html);
  $("#modal").show();
  $(".modal-close").click(function (e){
    $('#modal').hide();
  });
};

