require 'spec_helper'

describe 'visitor viewing market info' do
  it 'market show page', :vcr do
    visit market_path(1)
    expect(page).to have_text("Y Not Wednesday Farmers Market at Town Center")
    expect(page).to have_text("201 Market Street")
    expect(page).to have_text("Virginia")
    expect(page).to have_text("June")
    expect(page).to have_text("August")
    expect(page).to have_text("5:00")
    expect(page).to have_text("8:00")
    expect(page).to have_text("Cheese")
    expect(page).to have_text("Wine")
    expect(page).to have_text("credit")
  end

  describe 'visitor adding review to market' do
    it "can add a review and then see it on the market page", :vcr do
      visit market_path(1)
      fill_in "name",    with: 'Massimo'
      fill_in "email",   with: 'babyhappening@example.com'
      fill_in "title",   with: "Great samosas!"
      fill_in "content", with: "all the kiwi you could ever want."
      click_on 'Submit your review!'
      expect(page).to have_text("Great samosas!")
    end
  end

end

