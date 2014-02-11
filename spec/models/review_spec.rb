require 'spec_helper'

describe Review do
  describe "creation" do
    describe "with valid params" do
      it "is created", :vcr do
        params = {"name" => "Lauren",
                  "email" => "example@example.com",
                  "title" =>  "Great market",
                  "content" => "All the pineapples"}
        response = Review.new(params).save
        expect(response[0].name).to eq("Lauren")
        expect(response[0].content).to eq("All the pineapples")
      end
    end
  end
end
