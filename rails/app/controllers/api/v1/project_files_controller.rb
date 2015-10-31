module Api
  module V1
    class ProjectFilesController < ApplicationController
      respond_to :json

       skip_before_action :verify_authenticity_token

      # GET /project_files.json
      def index
        render json: {"project_file" => ProjectFile.all.as_json(root: false) }.to_json
      end

      # GET /project_files/1.json
      def show
        render json: {"project_file" => ProjectFile.find(params[:id]).as_json(root: false) }.to_json
      end

      # GET /project_files/new
      def new
        @project_file = ProjectFile.new
      end

      # GET /project_files/1/edit
      def edit
      end

      # POST /project_files.json
      def create
        @project_file = ProjectFile.new(project_file_params)

        if @project_file.save
          render json: @project_file, status: 201, location: [:api, @project_file]
        else
          render json: { errors: @project_file.errors }, status: 422
        end
      end

      # PATCH/PUT /project_files/1.json
      def update
        @project_file = ProjectFile.find(params[:id])

        if @project_file.update(project_file_params)
          render json: @project_file, status: 200, location: [:api, @project_file]
        else
          render json: { errors: @project_file.errors }, status: 422
        end
      end

      # DELETE /project_files/1.json
      def destroy
        @project_file = ProjectFile.find(params[:id])
        @project_file.destroy
        head 204
      end

      private
      # Never trust parameters from the scary internet, only allow the white list through.
      def project_file_params
        params.require(:project_file).permit(:name, :contents, :language)
      end
    end
  end
end
