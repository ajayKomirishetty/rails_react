class AppointmentsController < ApplicationController

  def index
    uri = URI('https://jsonplaceholder.typicode.com/todos/2')
    response = Net::HTTP.get(uri)
    @data = JSON.parse(response)
  rescue StandardError => e
    puts "Failed to fetch data: #{e.message}"
  end

end
