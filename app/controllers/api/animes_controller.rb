class Api::AnimesController < ApplicationController

    # a list of all the animes 
    def index
        @animes = Anime.all
        render :index
    end
    
    # the animes specific page
    def show
        @anime = Anime.find(params[:id])
        if @anime
            render :show
        else 
            render json: @anime.errors.full_messages, status: 404
        end 
    end

    # the allowed parameters for the anime
    private 
    def anime_params
        params.require(:anime).permit(:title, :description, :cover_photo)
    end
end