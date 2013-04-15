var data = require("./data");
var helper = require("./helper");
var fs = require("fs");
var $ = require("jquery");
var Showdown = require("showdown");
var MIME_TYPES = require("./types").MIME_TYPES;

var getAllPosts = function(req, res) {
    console.log("Blah");
    res.status(200);
    res.set('Content-Type', MIME_TYPES[".json"]);
    helper.allowCrossOrigin(res);
    res.set('Access-Control-Allow-Origin', '*');
    res.json(data.getAllPosts());
};

var getPost = function(req, res) {
    var id = req.params.id;
    res.set("Content-Type", MIME_TYPES[".json"]);
    helper.allowCrossOrigin(res);
    res.json(data.getPost(id));
};

var addPost = function(req, res) {
    var content = req.body.content;
    data.addPost(content);
    res.send(200);
}

var modifyPost = function(req, res) {
    var id = req.params.id;
    var new_content = req.body.content;
    if (data.modifyPost(id, new_content)) {
        res.send(200);
    } else {
        res.send(401, "Invalid post ID");
    }
}

var removePost = function(req, res) {
    // TODO: Remove a post from the database.
} 

/* EXPORTS */
exports.getAllPosts = getAllPosts;
exports.getPost = getPost;
exports.addPost = addPost;
exports.modifyPost = modifyPost;
exports.removePost = removePost;
