require 'spec_helper'

describe 'visitor viewing market info' do
  it 'market show page', :vcr do
    visit market_path(1)
    expect(page).to have_text("Y Not Wednesday Farmers Market at Town Center")
    expect(page).to have_text("201 Market Street")
    expect(page).to have_text("Virginia")
    expect(page).to have_text("-76.135361")
    expect(page).to have_text("36.841885")
    expect(page).to have_text("June")
    expect(page).to have_text("August")
    expect(page).to have_text("17:00:00")
    expect(page).to have_text("20:00:00")
    expect(page).to have_text("Cheese")
    expect(page).to have_text("Wine")
    expect(page).to have_text("credit")
  end

  describe 'visitor adding review to market' do
    it "can add a review", :vcr do
      visit market_path(1)
      fill_in "review[name]",    with: 'Lauren'
      fill_in "review[email]",   with: 'babyhappening@example.com'
      fill_in "review[title]",   with: "Great samosas!"
      fill_in "review[content]", with: "all the pineapples you could ever want."
      binding.pry
      click_on 'Write your review!'
    end
  end

  describe 'visitor looking for market reviews' do
    xit "has market reviews", :vcr do
      visit market_path(1)
      expect(page).to have_text("The best market in VA!")
      expect(page).to have_text("I really love this market. It's a great place!")
    end
  end

end

