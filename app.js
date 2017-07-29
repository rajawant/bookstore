var express= require('express');
var app= express();
var bodyParser=require('body-parser');
const mongoose= require('mongoose');
// Genre= require('./models/genres');
// Book= require('./models/book');
app.use(bodyParser.json());


// //connect to mongoose
mongoose.connect('mongodb://localhost/bookstore',{useMongoClient:true});

var db= mongoose.connection;

app.get('/',function(req,res){
	res.send('Hello World!');
});

// app.get('/api/genres',function(req,res){
// 	Genre.getGenres(function(err,genres){
// 		if(err){
// 			throw err;
// 		}

// 		res.json(genres);
// 	});
// });

// app.post('/api/genres',function(req,res){
// 	var genre=req.body;
// 	Genre.addGenre(genre,function(err,genre){
// 		if(err){
// 			throw err;
// 		}

// 		res.json(genre);
// 	});
// });

// app.put('/api/genres/:_id',function(req,res){
// 	var id=req.params._id;
// 	var genre=req.body;
// 	Genre.updateGenre(id,genre,{},function(err,genre){
// 		if(err){
// 			throw err;
// 		}

// 		res.json(genre);
// 	});
// });

// app.delete('/api/genres/:_id',function(req,res){
// 	var id=req.params._id;
// 	Genre.deleteGenre(id,function(err,genre){
// 		if(err){
// 			throw err;
// 		}

// 		res.json(genre);
// 	});
// });

// app.get('/api/books',function(req,res){
// 	Book.getBooks(function(err,books){
// 		if(err)
// 			throw err;

// 		res.json(books);
// 	});
// });

// app.post('/api/books',function(req,res){
// 	var book =req.body;

// 	Book.addBook(book,function(err,book){
// 		if(err)
// 			throw err;

// 		res.json(book);
// 	});
// });

// app.get('/api/books/:_id',function(req,res){
// 	Book.getBookById(req.params._id,function(err,book){
// 		if(err){
// 			throw err;
// 		}
// 		res.json(book);
// 	});
// });

app.listen(3000);

console.log('running on port 3000....');