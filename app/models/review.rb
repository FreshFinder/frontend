class Review
  attr_reader :name, :email, :title, :content, :market_id

  def initialize(params)
    @name = params["name"]
    @email = params["email"]
    @title = params["title"]
    @content = params["content"]
    @market_id = params["market_id"]
  end

  def save
    ReviewFetcher.create(self)
  end

end
