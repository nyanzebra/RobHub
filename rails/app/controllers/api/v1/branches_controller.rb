module Api
  module V1
    class BranchesController < ApplicationController
      before_action :set_branch, only: [:show, :edit, :update, :destroy]

      skip_before_action :verify_authenticity_token

      # GET /branches.json
      def index
        render json: {"branch" => Branch.all.as_json(root: false) }.to_json
      end

      # GET /branches/1.json
      def show
        render json: {"branch" => Branch.find(params[:id]).as_json(root: false) }.to_json
      end

      # GET /branchs/new
      def new
        @branch = Branch.new
      end

      # GET /branchs/1/edit
      def edit
      end

      # POST /branchs.json
      def create
        @branch = Branch.new(branch_params)

        if @branch.save
          render json: @branch, status: 201, location: [:api, @branch]
        else
          render json: { errors: @branch.errors }, status: 422
        end
      end

      # PATCH/PUT /branchs/1.json
      def update
        @branch = Branch.find(params[:id])

        if @branch.update(branch_params)
          render json: @branch, status: 200, location: [:api, @branch]
        else
          render json: { errors: @branch.errors }, status: 422
        end
      end

      # DELETE /branchs/1.json
      def destroy
        @branch = Branch.find(params[:id])
        @branch.destroy
        head 204
      end

      private
      # Use callbacks to share common setup or constraints between actions.
      def set_branch
        @branch = Branch.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def branch_params
        params.require(:branch).permit(:name,:author)
      end
    end
  end
end
