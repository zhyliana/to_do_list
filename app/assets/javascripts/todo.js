window.Todo = {
  Models: {}, 
  Collections: {}, 
  Views: {},
  
  initialize: function(){
    var view = new Todo.Views.TodosIndex({
      collection: Todo.Collections.todos,
      className: "my-special-class"
    });
    
    Todo.Collections.todos.fetch({
     success: function(){
       $("body").append(view.render().$el);
     } 
    });
  }
};

$(Todo.initialize);