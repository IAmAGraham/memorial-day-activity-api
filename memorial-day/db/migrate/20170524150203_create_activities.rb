class CreateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :activities do |t|
      t.string :student_name
      t.string :activity
      t.string :location
      t.integer :distance_from_school
      t.string :description

      t.timestamps
    end
  end
end
