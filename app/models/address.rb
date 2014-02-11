class Address
  attr_reader :street, :city, :state, :zipcode, :lat, :lng, :description

  def initialize(market_address)
    @street = market_address["street"]
    @city = market_address["city"]
    @state = market_address["state"]
    @zipcode = market_address["zipcode"]
    @lat = market_address["lat"]
    @lng = market_address["long"]
    @description = market_address["description"]
  end


end
