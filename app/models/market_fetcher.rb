class MarketFetcher

  def self.connection
    if Rails.env.production?
      uri = "http://freshfinder.us"
    else
      uri = "http://localhost:8080"
    end
    Faraday.new("#{uri}/api/v1/markets") do |faraday|
      faraday.request  :url_encoded
      faraday.response :logger
      faraday.adapter  Faraday.default_adapter
    end
  end

  def self.find(id)
    response = connection.get "#{id}.json"
    Market.new(JSON.parse(response.body))
  end

end
