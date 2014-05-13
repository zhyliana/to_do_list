window.Todo.Models.Todo = Backbone.Model.extend({
  urlRoot: "/api/todos",
  
  comments: function(){
    if(this._comments){
      return new Todo.Collections.TodoComments([],{
        todo: this;
      });
    }
    
    return this._comments;
  }
});
