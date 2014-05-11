class TodoComment < ActiveRecord::Base
  # attr_accessible :todo_id, :content
  
  belongs_to :todo
  
  validates :content, :todo, :todo_id, presence: true
  
end
