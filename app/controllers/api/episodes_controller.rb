class Api::EpisodesController < ApplicationController
    def index 
        @episodes = Episode.all
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
end
