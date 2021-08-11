class Api::BookmarksController < ApplicationController
    def index
        #  queue = Queue.where(user_id: params[:user_id])
        @user = current_user
        if @user
            @bookmark = Bookmark.where(user_id: params[:user_id])
            render :index
        else
            render json: ["You must be logged in for this function"]
        end
        
    end

    def create
        debugger
        @bookmark = Bookmark.new(bookmark_params)
        if @bookmark.save!
            render json: @bookmark
        else
            render json: ["You must be logged in for this function"]
        end
    end

    def destroy #
       @user = current_user
       if @user
        @bookmark = Bookmark.find(params[:id])
        @bookmark.destroy
       end
    end

    private
    def bookmark_params
        params.require(:bookmark).permit(:user_id, :anime_id, :episode_id)
    end
end