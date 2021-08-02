class Api::UsersController < ApplicationController
    # this will allow for a user to sign up and upon succesful signup 
    # they will be logged in 
    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render 'api/users/show'
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    # these are the necessary things that user needs to register
    private
    def user_params
        params.require(:user).permit(:username, :password, :email)
    end
end