class ReviewsController < ApplicationController
  def create
    @review = Review.new(params).save
    render text: "woot"
  end
end
