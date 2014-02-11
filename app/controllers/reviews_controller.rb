class ReviewsController < ApplicationController
  def create
    @review = Review.new(params).save
    market = params[:market_id]
    redirect_to market_path(market)
  end
end
