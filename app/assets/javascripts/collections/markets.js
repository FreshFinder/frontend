App.Collections.Markets = Backbone.Collection.extend({
  model: App.Models.Market,
  url: "api/v1/markets"
});
