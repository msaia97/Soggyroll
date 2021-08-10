class Api::QueuesController < ApplicationController
    def index
        @user = current_user
        if @user
            @queues = Queue.all
            render :index
        else
            render json: ["You must be logged in for this function"]
        end
        
    end

    def create
        @queue = Queue.new(queue_params)
        if !@queue.save
            render json: ["You must be logged in for this function"]
        end
    end

    def destroy #
       @queue = Queue.find(params[:id])
       @queue.destroy
    end

    private
    def queue_params
        params.require(:queue).permit(:user_id, :anime_id, :episode_id)
    end
end