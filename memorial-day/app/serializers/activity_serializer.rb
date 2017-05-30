class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :student_name, :activity, :location, :description, :distance_from_school

end
