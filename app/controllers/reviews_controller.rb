class ReviewsController < ApplicationController
  def create
    @review = Review.new(params).save
    redirect_to root_path
  end
end
