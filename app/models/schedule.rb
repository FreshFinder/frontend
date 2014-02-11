class Schedule

  attr_reader :day, :start_time, :end_time

  def initialize(market_schedule)
    @day = Date::DAYNAMES[market_schedule["day"]]
    @start_time = Time.parse(market_schedule["start_time"]).strftime("%I:00")
    @end_time = Time.parse(market_schedule["end_time"]).strftime("%I:00pm")
  end
end
