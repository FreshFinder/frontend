class MarketsController < ApplicationController
  def index
  end

  def show
    @market = MarketFetcher.find(params[:id])
  end
end
