require 'spec_helper'

describe 'visitor viewing market info' do
  it 'market show page' do
    visit market_path(1)
    expect(page).to have_text("Y Not Wednesday Farmers Market at Town Center")
    expect(page).to have_text("201 Market Street")
    expect(page).to have_text("Virginia")
    expect(page).to have_text("June")
    expect(page).to have_text("August")
    expect(page).to have_text("17:00:00")
    expect(page).to have_text("20:00:00")
    # expect(page).to have_text("Cheese")
    # expect(page).to have_text("Wine")
    # expect(page).to have_text("credit")
  end

  describe 'visitor adding review to market' do
    pending
  end

end

