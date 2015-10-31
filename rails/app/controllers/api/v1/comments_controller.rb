module Api
  module V1
    class CommentsController < ApplicationController
      before_action :set_comment, only: [:show, :edit, :update, :destroy]

      skip_before_action :verify_authenticity_token

      # GET /comments.json
      def index
        render json: {"comment" => Comment.all.as_json(root: false) }.to_json
      end

      # GET /comments/1.json
      def show
        render json: {"comment" => Comment.find(params[:id]).as_json(root: false) }.to_json
      end

      # GET /comments/new
      def new
        @comment = Comment.new
      end

      # GET /comments/1/edit
      def edit
      end

      # POST /comments.json
      def create
        @comment = Comment.new(comment_params)

        if @comment.save
          render json: @comment, status: 201, location: [:api, @comment]
        else
          render json: { errors: @comment.errors }, status: 422
        end
      end

      # PATCH/PUT /comments/1.json
      def update
        @comment = Comment.find(params[:id])

        if @comment.update(comment_params)
          render json: @comment, status: 200, location: [:api, @comment]
        else
          render json: { errors: @comment.errors }, status: 422
        end
      end

      # DELETE /comments/1.json
      def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        head 204
      end

      private
      # Use callbacks to share common setup or constraints between actions.
      def set_comment
        @comment = Comment.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def comment_params
        params.require(:comment).permit(:name,:author)
      end
    end
  end
end
