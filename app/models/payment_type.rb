class PaymentType

  attr_reader :name

  def initialize(market_payment_type)
    @name = market_payment_type
  end

end
