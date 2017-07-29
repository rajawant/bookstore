var mongoose= require('mongoose');

// books schema
var bookSchema= mongoose.Schema({
	name:{
		type:String,
		required: true
	},
	genres:{
		type:String,
		required: true
	},
	description:{
		type:String
	},
	author:{
		type:String,
		required: true
	},
	createDate:{
		type: Date,
		default:Date.now
	}
});

//To access genreSchema from anywhere
var Book= module.exports= mongoose.model('Book',bookSchema);

//Get books
module.exports.getBooks= function(callback,limit) {
	Book.find(callback).limit(limit);
}

//Get book
module.exports.getBookById= function(id,callback) {
	Book.findById(id,callback);
}

//add book
module.exports.addBook=function(book,callback){
	Book.create(book,callback);
}