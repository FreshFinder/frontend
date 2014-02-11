class Market

  attr_reader :name, :address, :season1, :season2, :season3, :season4, :products, :payment_types

  def initialize(json_response)
    market = json_response["market"]
    @name = market["name"]
    @address = Address.new(market["address"])
    @season1 = Season.new(market["seasons"][0])
    @season2 = Season.new(market["seasons"][1])
    @season3 = Season.new(market["seasons"][2])
    @season4 = Season.new(market["seasons"][3])
    @products = market["products"].each do |product|
      Product.new(product)
    end
    @payment_types = market["payment_types"].each do |type|
      PaymentType.new(type)
    end
  end
end
