class Api::V1::ActivitiesController < ApplicationController

  def index
    @activities = Activity.all
    render json: @activities, each_serializer: ActivitySerializer
  end

  def create
    @activities = Activity.new(activity_params)
    @activities.save
    render json: @activities, each_serializer: ActivitySerializer
  end

  def show
    @activities = Activity.find(activity_params)
    render json: @activities, each_serializer: ActivitySerializer
  end

  private

  def activity_params
    params.require(:activities).permit(:student_name, :activity, :location, :distance_from_school, :description)
  end


end
