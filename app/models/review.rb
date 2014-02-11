class Review
  attr_reader :name, :email, :title, :content

  def initialize(params)
    @name = params["name"]
    @email = params["email"]
    @title = params["title"]
    @content = params["content"]
  end

  def save

  end

end
