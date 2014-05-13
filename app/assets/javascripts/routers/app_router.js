window.Todo.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    //when you go to this page : invoke this function
    "": "todosIndex",
    "todos/new": "todosNew",
    "todos/:id": "todosShow",
  },
  
  todosIndex: function(){
    var indexView = new Todo.Views.TodosIndex({
      collection: Todo.Collections.todos
    });
    
    Todo.Collections.todos.fetch();
    $("body").html(indexView.render().$el);
  },
  
  todosNew: function(){
    var newView = new Todo.Views.TodosNew();
    $("body").html(newView.render().$el);
  },
  
  todosShow: function(id){
    var model = Todo.Collections.todos.getOrFetch(id);
    var showView = new Todo.Views.TodosShow({
      model: model
    });
    
    $("body").html(showView.render().$el);
  }
});