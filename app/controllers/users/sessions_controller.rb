# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    if current_user
      render json: {
        message: 'Logged in successfully.',
        user: current_user,
        token: request.env['warden-jwt_auth.token'] # If using Devise JWT
      }, status: :ok
    else
      render json: { error: 'Invalid login credentials.' }, status: :unauthorized
    end
  end

  def respond_to_on_destroy
    if current_user
      render json: {
        message: 'Logged out successfully.'
      }, status: :ok
    else
      render json: { error: 'Logout failed.' }, status: :unauthorized
    end
  end
end
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
