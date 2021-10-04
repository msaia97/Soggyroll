class Api::EpisodesController < ApplicationController
    # a list of all the episodes 
    def index 
        @episodes = Episode.all
        render :index
    end

    # the episode watch page 
    def show
        @episode = Episode.find(params[:id])
        if @episode 
            render :show
        else 
            render json: @episodes.errors.full_messages, status:404
        end
    end

    # the allowed episode params 
    private
    def episode_params
        params.require(:episode).permit(:title, :description, :video_id, :photo, :video, :episode_num)
    end
end
