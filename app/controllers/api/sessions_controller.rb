class Api::SessionsController < ApplicationController
    # when users log in they are creating a session and will
    # log them in or else render errors 
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user 
            login(@user)
            render 'api/users/show'
        else 
            render json: ['Invalid username/password combination'], status: 422
        end
    end

    # this allows the iser to logout and stop the current session
    def destroy
        @user = current_user
        if @user
            logout
            render 'api/users/show'
            # render '/api/session'
        else 
            render json: ['Nobody signed in'], status: 404
        end
    end
end