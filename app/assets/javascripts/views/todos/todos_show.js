window.Todo.Views.TodosShow = Backbone.View.extend({
  template: JST["todos/show"],
  
  initialize: function(option){
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.comments(), "sync add remove", this.render)
  },
  
  render: function(){
    var renderedContent = this.template({
      todo: this.model 
      // comments: this.comments
    });
      
    this.$el.html(renderedContent);
    
    this.model.comments().each(function(comment){
      var commentsShowView = new Todo.Views.CommentsShow({
       model: comment 
      });
      
      this.$(".comments").append(commentsShowView.render().$el);
    });
    
    return this;
  }
});