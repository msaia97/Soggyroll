class Api::BookmarksController < ApplicationController
    def index
        @user = current_user
        if @user
            @bookmark = Bookmark.where(userid: params[:user_id])
            render :index
        else
            render json: ["You must be logged in for this function"]
        end
        
    end

    def create
        # debugger
        @bookmark = Bookmark.new(bookmark_params)
        @bookmark.anime_id = nil
        @bookmark.episode_id = nil
        if @bookmark.save
            render :show
        else
            render json: ["You must be logged in for this function"], status: 404
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