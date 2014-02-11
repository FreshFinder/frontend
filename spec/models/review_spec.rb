require 'spec_helper'

describe Review do
  describe "creation" do
    describe "with valid params" do
      it "is created" do
        #ReviewFetcher.stub(:create).with(params).and_return(params.from_json)
        params = {"name" => "Lauren",
                  "email" => "example@example.com",
                  "title" =>  "Great market",
                  "content" => "All the pineapples"}
        review = Review.new(params)
        expect(review.name).to eq("Lauren")
        expect(review.content).to eq("All the pineapples")
      end
    end
  end
end
