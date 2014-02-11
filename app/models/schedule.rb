class Schedule

  attr_reader :day, :start_time, :end_time

  def initialize(market_schedule)
    @day = market_schedule["day"]
    @start_time = market_schedule["start_time"]
    @end_time = market_schedule["end_time"]
  end

end
