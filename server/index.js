var express = require("express");
var posts = require("./routes/posts");
var data = require("./routes/data");
var comments = require("./routes/comments");
var frontend = require("./routes/frontend");

// serve all the posts we want
data.importPosts();

/* Configure app details */
var app = express();

app.configure(function() {
    app.use(express.logger("dev"));
    app.use(express.bodyParser());
});

/* Allow cross-origin requests */
app.get('/*', function(req, res, next) {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

/* POSTS */
app.get("/posts", posts.getAllPosts);
app.get("/post/:id", posts.getPost);
app.post("/posts", posts.addPost);
app.put("/post/:id", posts.modifyPost);
app.delete("/post/:id", posts.removePost);

/* COMMENTS */
app.get("/post/comments/", comments.getComments);
app.post("/post/comment", comments.addComment);
app.put("/post/comment/:id", comments.modifyComment);
app.delete("/post/comment/:id", comments.removeComment);

/* SERVE CLIENT HTML, JS, ETC. FILES */
app.get(["/", "/index.html"], frontend.serveHome);
app.get(/^\/js\/(\w+)\.js/, frontend.serveJS); //match /js/[thing].js
app.get(/^\/css\/(\w+)\.css/, frontend.serveCSS); //match /css/[thing].css


app.listen(8888);
console.log("Listening on port 8888...");
