# Use this service to search movies
class MovieService
  BASE_URL = "https://api.themoviedb.org/3"
  API_KEY = "a99cc60fc2b34dbb18cb806b8a88ed14"

  # Input: movie_name - name of the movie you want to search
  # response: [movies] - returns list of all movies that matches the search criteria
  def self.search(movie_name)
    uri = build_uri(movie_name)
    response = Net::HTTP.get_response(uri)

    JSON.parse(response.body) if response.is_a?(Net::HTTPSuccess)
  end

  private

  # Build URI for API request
  # @param movie_name [String]
  # @return [URI]
  def self.build_uri(movie_name)
    URI("#{BASE_URL}/search/movie").tap do |uri|
      uri.query = URI.encode_www_form(api_key: API_KEY, query: movie_name)
    end
  end
end