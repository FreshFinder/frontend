var Modal = {};
Modal.addModalListener = function(payment, products, market_data, val){
  for( i = 0; i < market_data[0].payment_types.length; i++) {
    payment.push(val.payment_types[i].name);
  };

  for( i = 0; i < market_data[0].products.length; i++) {
    products.push(val.products[i].name);
  };
  var html = '<h3 class="name">' + market_data[0].name + '</h3>' +
    '<p>' + payment.join(', ') + '</br>' + products + '</p>';

  $(".md-content").html(html);
  $("#modal").show();
  $(".modal-close").click(function (e){
    $('#modal').hide();
  });
};

