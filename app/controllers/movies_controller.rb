class MoviesController < ApplicationController
  before_action :fetch_movies, only: [:index]

  def index
    respond_to do |format|
      format.json { render json: @movies }
      format.html { render 'movies/index' }
    end
  end

  private

  def fetch_movies
    @movies = MovieService.search(search_params[:query])
  end

  def search_params
    params.permit(:query)
  end
end
