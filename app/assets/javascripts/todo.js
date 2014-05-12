window.Todo = {
  Models: {}, 
  Collections: {},
  Routers: {}, 
  Views: {},
  
  initialize: function(){
    // sets up routes
    new Todo.Routers.AppRouter();
    
    //tells backbone to start listening for any changes in location
    Backbone.history.start();
  }
};

$(Todo.initialize);