class Api::AnimesController < ApplicationController
    def index
        @animes = Anime.all
        render :index
    end
    
    def show
        @anime = Anime.find(params[:id])
        if @anime
            render :show
        else 
            render json: @anime.errors.full_messages, status: 404
        end 
    end

    private 
    def anime_params
        params.require(:anime).permit(:title, :description, :cover_photo)
    end
end