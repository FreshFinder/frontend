require 'spec_helper'

describe ReviewFetcher do
  describe "create", :vcr do
    it "returns review and status" do
      params = {"name" => "Lauren",
                "email" => "example@example.com",
                "title" =>  "Great market",
                "content" => "All the pineapples",
                "market_id" => "1"}
      review, status = Review.new(params).save
      expect(status).to eq(201)
    end
  end
end
