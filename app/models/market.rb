class Market

  attr_reader :name, :address

  def initialize(json_response)
    market = json_response["market"]
    @name = market["name"]
    @address = Address.new(market["address"])
  end

end
