var express = require("express");
var posts = require("./routes/posts");
var comments = require("./routes/comments");

//var media = require("./routes/media");
//var read = require("./routes/read");

var app = express();

app.configure(function() {
    app.use(express.logger("dev"));
    app.use(express.bodyParser());
});

/* Allow cross-origin requests */
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

/* POSTS */
app.get("/posts", posts.getAllPosts);
app.get("/post/:id", posts.getPost);
app.post("/posts", posts.addPost);
app.put("/post/:id", posts.modifyPost);
app.delete("/post/:id", posts.removePost);

/* COMMENTS */
app.get("/post/comment", comments.getAllComments);
app.get("/post/comment/:id", comments.getComment);
app.post("/post/comment", comments.addComment);
app.put("/post/comment/:id", comments.modifyComment);
app.delete("/post/comment/:id", comments.removeComment);

app.listen(8888);
console.log("Listening on port 8888...");
