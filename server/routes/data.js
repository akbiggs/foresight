var fs = require("fs");
var config = require("../config");
var posts = []
var comments = []


/* PUBLIC */

var importPosts = function() {
    fs.readdir(config.post_dir, function(err, files) {
        if (err) throw err;
        for (var i = 0; i < files.length; i++) {
            importPost(config.post_dir + files[i])
        }
    });
};

var getAllPosts = function() {
    return posts;
};

var getPost = function(id) {
    return (isValidPost(id) ? posts[id] : null);
};

var addPost = function(content) {
    var post = {}
    post.paragraphs = extractParagraphs(content);
    posts.push(post);
};

var modifyPost = function(id, new_content) {
    if (isValidPost(id)) {
        var post = posts[id];
        var old_paras = post.paragraphs;
        var new_paras = extractParagraphs(new_content);

        // since the comment paragraph indices might be thrown off by the new
        // changes, consolidate these changes with the current comments.
        post.paragraphs = new_paras;
        post.comments = consolidateComments(old_paras, new_paras, post.comments);

        return post;
    }

    return false;
};

var getAllComments = function(post_id) {
    return (isValidPost(id) ? posts[post_id].comments : null);
};

var getComment = function(post_id, id) {
    return (isValidComment(post_id, id) ? posts[post_id].comments[id] : null);
};

var addComment = function(post_id, content) {
    if (isValidPost(post_id)) {
        var comment = {};
        
        comment.content = content;

        comments[post_id].push(comment);
    }
}

/* PRIVATE */

var isValidPost = function(pid) {
    return !(pid < 0 || pid >= posts.length);
};

var isValidComment = function(pid, cid) {
    if (isValidPost(pid))
        return !(cid < 0 || cid >= posts[pid].comments.length);

    return false;
};

var extractParagraphs = function(content) {
    var paragraphs = new Array();

    // TODO: Extract paragraphs from the post content.
    paragraphs.push(content);

    return paragraphs;
};

/**
 * Match up the comments from the old paragraphs to the new paragraphs.
 */
var consolidateComments = function(old_paras, new_paras, comments) {
    // TODO: Match up comments from old paragraphxs to new_paragraphs.
    return comments;
};

var importPost = function(filename) {
    fs.readFile(filename, function(err, buf) {
        addPost(buf.toString());
    });
};

/* EXPORTS */

exports.importPosts = importPosts;
exports.getAllPosts = getAllPosts;
exports.getPost = getPost;
exports.addPost = addPost;
exports.modifyPost = modifyPost;

exports.getAllComments = getAllComments;
exports.getComment = getComment;
exports.addComment = addComment;
