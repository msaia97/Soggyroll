class Api::ShowsController < ApplicationController
    def index
        @shows = Show.all
        render :index
    end
    
    def show
        @show = Show.find(params[:id])
        if @show
            render :show
        else 
            render json: @show.errors.full_messages
        end 
    end

    private 
    def show_params
        params.require(:show).permit(:title, :description)
    end
end