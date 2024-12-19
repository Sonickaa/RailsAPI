class Users::UsersController < ApplicationController
  before_action :authenticate_user!

  # This action returns the current logged-in user
  def current
    render json: current_user
  end
end
