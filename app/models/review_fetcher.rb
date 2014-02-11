class ReviewFetcher

  def self.create(review)
    review_params = review.as_json
    response = connection.post '/api/v1/reviews', { :review => review_params }
    response_code = response.status
    return [review, response_code]
  end

  def self.connection
    if Rails.env.production?
      uri = "http://freshfinder.us"
    else
      uri = "http://localhost:8080"
    end
    Faraday.new("#{uri}/api/v1") do |faraday|
      faraday.request  :url_encoded
      faraday.response :logger
      faraday.adapter  Faraday.default_adapter
    end
  end

  def self.find(market_id)
    response = connection.get "/api/v1/reviews/#{market_id}.json"
    body = JSON.parse(response.body)
    body.map {|review| Review.new(review)}
  end

end
