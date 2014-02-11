class ReviewFetcher

  def self.create(review)
    review_params = review.as_json
    response = connection.post '/api/v1/reviews', { :review => review_params }
    parsed_response = JSON.parse(response.body)
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

end
