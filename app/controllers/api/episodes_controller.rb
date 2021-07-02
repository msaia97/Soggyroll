class Api::EpisodesController < ApplicationController
    def index 

        @episodes = Episode.all
    
        @animeId = Anime.find_by(video_id: params[:video_id])
        # debugger
        render :index
    end

    def show
        @episode = Episode.find(params[:id])
        if @episode 
            render :show
        else 
            render json: @episodes.errors.full_messages, status:404
        end
    end

    private
    def episode_params
        params.require(:episode).permit(:title, :description, :video_id, :photo, :video)
    end
end
