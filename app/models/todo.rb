class Todo < ActiveRecord::Base
  # attr_accessible :title
  
  validates :title, presence: true
  
  has_many :comments, class_name: "TodoComment"
end
