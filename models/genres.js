var mongoose= require('mongoose');

// genre schema
var genreSchema= mongoose.Schema({
	name:{
		type:String,
		required: true
	},
	createDate:{
		type: Date,
		default:Date.now
	}
});

//To access genreSchema from anywhere
var Genre= module.exports= mongoose.model('Genre',genreSchema);

//Get genre
module.exports.getGenres= function(callback,limit) {
	Genre.find(callback).limit(limit);
}

//Add genre
module.exports.addGenre=function(genre,callback){
	Genre.create(genre,callback);
}

//update genre
module.exports.updateGenre=function(id,genre,options,callback){
	var query={_id: id};
	var update= {
		name: genre.name
	}
	Genre.findOneAndUpdate(query,update,options,callback);
}

//delete genre
module.exports.deleteGenre=function(id,callback){
	var query={_id:id}
	Genre.remove(query,callback);
}