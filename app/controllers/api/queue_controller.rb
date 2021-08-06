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
        @queue = current_user.queues.new()
        if !@queue.save
            render json: ["You must be logged in for this function"]
        end
    end

    def destroy #
       @queue = Queue.find(params[:id])
       @queue.destroy
    end
end