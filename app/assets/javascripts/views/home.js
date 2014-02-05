App.Views.Home = Backbone.View.extend({
  tagName: "li",
  className: "market",
  events: {
    "click .stacker":    "open"
  },

  initialize: function() {
    this.listenTo(this.model, "load", this.render)
  },

  render: function() {
    App.renderedContent = this.collection.toJSON();
    $(this.el).html(App.renderedContent);
    return this;
  }
});
