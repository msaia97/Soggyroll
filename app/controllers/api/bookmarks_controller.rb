class Api::BookmarksController < ApplicationController
    def index
        @user = current_user
        if @user
            @bookmarks = @user.bookmarks
            render :index
        else
            render json: ["You must be logged in for this function"], status: 404
        end
        
    end

    def create
        @user = current_user
        @bookmark = Bookmark.new(bookmark_params)
        @bookmark.anime_id || nil
        @bookmark.episode_id || nil
        if @bookmark.save
            render :show
        else
            render json: ["You must be logged in for this function"], status: 404
        end
    end

    def destroy 
        @bookmark = current_user.bookmarks.where(id: params[:id])
        @bookmark = @bookmark.first
        if @bookmark
            @bookmark.destroy!
            render :show
        else
            render json: ["Cant find the bookmark"], status: 404
        end
    end

    private
    def bookmark_params
        params.require(:bookmark).permit(:user_id, :anime_id, :episode_id)
    end
end