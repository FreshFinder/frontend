require 'spec_helper'

describe 'homepage view' do
  it 'renders' do
    visit root_path
    within('.logo') do
      expect(page).to have_content 'Fresh Finder'
    end
  end
end

