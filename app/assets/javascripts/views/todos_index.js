window.Todo.Views.TodosIndex = Backbone.View.extend({
  template: JST["todos/index"],
  
  initialize: function(options){
    this.todos = options.todos;
  },
  
  render: function(){
    var renderedContent = this.template({
      todos: this.todos
    });
    
    this.$el.html(renderedContent);
    
    return this;
  }
});
