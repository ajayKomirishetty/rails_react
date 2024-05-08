class MoviesController < ApplicationController

  before_action :set_movies, only: %w[index]
  def index
    respond_to do |format|
      format.json { render json: @movies }
      format.html { render 'movies/index' }
    end
  end

  private

  def set_movies
    @movies = MovieService.search(params[:query])
  end
end
