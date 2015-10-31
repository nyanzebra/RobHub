module Api
  module V1
    class CommitsController < ApplicationController
      before_action :set_commit, only: [:show, :edit, :update, :destroy]

    skip_before_action :verify_authenticity_token

      # GET /commits.json
      def index
        render json: {"commit" => Commit.all.as_json(root: false) }.to_json
      end

      # GET /commits/1.json
      def show
        render json: {"commit" => Commit.find(params[:id]).as_json(root: false) }.to_json
      end

      # GET /commits/new
      def new
        @commit = Commit.new
      end

      # GET /commits/1/edit
      def edit
      end

      # POST /commits.json
      def create
        @commit = Commit.new(commit_params)

        if @commit.save
          render json: @commit, status: 201, location: [:api, @commit]
        else
          render json: { errors: @commit.errors }, status: 422
        end
      end

      # PATCH/PUT /commits/1.json
      def update
        @commit = Commit.find(params[:id])

        if @commit.update(commit_params)
          render json: @commit, status: 200, location: [:api, @commit]
        else
          render json: { errors: @commit.errors }, status: 422
        end
      end

      # DELETE /commits/1.json
      def destroy
        @commit = Commit.find(params[:id])
        @commit.destroy
        head 204
      end

      private
      # Use callbacks to share common setup or constraints between actions.
      def set_commit
        @commit = Commit.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def commit_params
        params.require(:commit).permit(:message,:author,:key)
      end
    end
  end
end
