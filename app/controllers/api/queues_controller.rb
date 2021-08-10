class Api::QueuesController < ApplicationController
    def index
        #  queue = Queue.where(user_id: params[:user_id])
        @user = current_user
        if @user
            @queue = Queue.where(user_id: params[:user_id])
            render :index
        else
            render json: ["You must be logged in for this function"]
        end
        
    end

    def create
        debugger
        @queue = Queue.new(queue_params)
        if @queue.save!
            render json: @queue
        else
            render json: ["You must be logged in for this function"]
        end
    end

    def destroy #
       @user = current_user
       if @user
        @queue = Queue.find(params[:id])
        @queue.destroy
       end
    end

    private
    def queue_params
        params.require(:queue).permit(:user_id, :anime_id, :episode_id)
    end
end