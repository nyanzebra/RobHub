module Api
  module V1
    class ArticlesController < ApplicationController
      respond_to :json
      skip_before_action :verify_authenticity_token

      # GET /articles.json
      def index
        render json: {"article" => Article.all.as_json(root: false) }.to_json
      end

      # GET /articles/1.json
      def show
        render json: {"article" => Article.find(params[:id]).as_json(root: false) }.to_json
      end

      # GET /articles/new
      def new
        @article = Article.new
      end

      # GET /articles/1/edit
      def edit
      end

      # POST /articles.json
      def create
        @article = Article.new(article_params)

        if @article.save
          render json: @article, status: 201, location: [:api, @article]
        else
          render json: { errors: @article.errors }, status: 422
        end
      end

      # PATCH/PUT /articles/1.json
      def update
        @article = Article.find(params[:id])

        if @article.update(article_params)
          render json: @article, status: 200, location: [:api, @article]
        else
          render json: { errors: @article.errors }, status: 422
        end
      end

      # DELETE /articles/1.json
      def destroy
        @article = Article.find(params[:id])
        @article.destroy
        head 204
      end

      private
      # Never trust parameters from the scary internet, only allow the white list through.
      def article_params
        params.require(:article).permit(:title,:author,:contents)
      end
    end
  end
end
