require 'spec_helper'

describe 'visitor viewing market info' do
  it 'market show page' do
    visit market_path(1)
    expect(page).to have_text("Y Not Wednesday Farmers Market at Town Center")
    expect(page).to have_text("201 Market Street")
    expect(page).to have_text("Virginia")
    expect(page).to have_text("-76.135361")
    expect(page).to have_text("36.841885")
  end

  describe 'visitor adding review to market' do
    pending
  end

end

