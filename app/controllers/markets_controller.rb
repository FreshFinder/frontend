class MarketsController < ApplicationController
  def index
  end

  def show
    @market_id = params[:id]
    @market = MarketFetcher.find(params[:id])
  end
end
