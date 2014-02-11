class Schedule

  attr_reader :day, :start_time, :end_time

  def initialize(market_schedule)
    @day = market_schedule["day"]
    # @day = market_schedule[weekday(day)]
    @start_time = market_schedule["start_time"]
    @end_time = market_schedule["end_time"]
  end

  #  def weekday[day]
  #   case day
  #   when  0
  #     Sunday
  #   when 1
  #     Monday
  #   when  2
  #     Tuesday
  #   when 3
  #     'Wednesday'
  #   when 4
  #     'Thursday'
  #   when 5
  #     'Friday'
  #   when 6
  #     'Saturday'
  #   end
  # end

end
