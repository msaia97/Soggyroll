class Api::QueuesController < ApplicationController
    def index
        @queues = Queue.all
        render :index
    end
end