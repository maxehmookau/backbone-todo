var Todo = Backbone.Model.extend({
	defaults: {
		title: '',
		completed: false
	}
});

var myTodo = new Todo({
	title: 'My title'
});

var ToDoView = Backbone.View.extend({
	tagName: 'li',
	todoTpl: _.template($('#item-template').html()),

	events: {
		'dblclick label': 'edit',
		'keypress .edit': 'updateOnEnter',
		'blur .edit': 'close'
	},

	initialize: function() {
		this.$el = $('#todo');
	},

	render: function() {
		this.$el.html( this.todoTpl(this.model.toJSON()));
		this.input = this.$('.edit');
		return this;
	},

	edit: function(){

	},

	close: function(){

	},

	updateOnEnter: function(e) {

	}

});

var todoView = new ToDoView({model: myTodo});