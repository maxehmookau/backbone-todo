var Todo = Backbone.Model.extend({

	defaults: {
		title: 'chips',
		completed: true,
	},

	initialize: function() {
		console.log("new Todo initialized");
	}

});

var TodoView = Backbone.View.extend({

	el: $('.todo'),

	events: {
		'click' : 'dismiss'
	},

	initialize: function() {
		this.model.on('change', this.render, this);
		this.render();
	},

	render: function() {
		this.$el.html(this.model.get('title') + "<div class='close'>x</div>");
		return this;
	},

	dismiss: function() {
		this.$el.slideUp();
	}

});

var todo = new Todo({
	title: 'example title'
});
var todoView = new TodoView({
	model: todo
});