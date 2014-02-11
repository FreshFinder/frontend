class Season

  attr_reader :season_number, :start_month, :end_month, :schedules

  def initialize(market_season)
    @season_number = market_season["season_number"]
    @start_month = market_season["start_month"]
    @end_month = market_season["end_month"]
    @schedules = market_season["schedules"].map do |schedule|
      schedule = Schedule.new(schedule)
    end
  end

end
