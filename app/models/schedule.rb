class Schedule

  attr_reader :day, :start_time, :end_time

  def initialize(market_schedule)
    @day = Date::DAYNAMES[market_schedule["day"]]
    @start_time = parse_time(market_schedule, "start_time")
    @end_time = parse_time(market_schedule, "end_time")
  end

  private

  def parse_time(schedule, attribute)
    begin
      Time.parse(schedule[attribute.to_s]).strftime("%-I:00 %p")
    rescue TypeError
      ""
    end
  end

end
