class TodoComment < ActiveRecord::Base
  belongs_to :todo
  
  validates :content, :todo, :todo_id, presence: true  
end
