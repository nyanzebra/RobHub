module Api
  module V1
    class ProjectsController < ApplicationController
      respond_to :json

     skip_before_action :verify_authenticity_token

      # GET /projects.json
      def index
        render json: {"project" => Project.all.as_json(root: false) }.to_json
      end

      # GET /projects/1.json
      def show
        render json: {"project" => Project.find(params[:id]).as_json(root: false) }.to_json
      end
      # GET /projects/new
      def new
        @project = Project.new
      end

      # GET /projects/1/edit
      def edit
      end

      # POST /projects.json
      def create
        @project = Project.new(project_params)

        if @project.save
          render json: @project, status: 201, location: [:api, @project]
        else
          render json: { errors: @project.errors }, status: 422
        end
      end

      # PATCH/PUT /projects/1.json
      def update
        @project = Project.find(params[:id])

        if @project.update(project_params)
          render json: @project, status: 200, location: [:api, @project]
        else
          render json: { errors: @project.errors }, status: 422
        end
      end

      # DELETE /projects/1.json
      def destroy
        @project = Project.find(params[:id])
        @project.destroy
        head 204
      end

      private
      # Never trust parameters from the scary internet, only allow the white list through.
      def project_params
        params.require(:project).permit(:name,:author,:language,:description)
      end
    end
  end
end
