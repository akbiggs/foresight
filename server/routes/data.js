posts = []

/* PUBLIC */

exports.getAllPosts = function() {
    return posts;
};

exports.getPost = function(id) {
    return (isValidPost(id) ? posts[id] : null);
};

exports.addPost = function(content) {
    var post = {}
    post.paragraphs = extractParagraphs(content);
    post.comments = new Array();
    posts.push(post);
};

exports.modifyPost = function(id, new_content) {
    if (isValidPost(id)) {
        var post = posts[id];
        var old_paras = post.paragraphs;
        var new_paras = extractParagraphs(new_content);

        // since the comment paragraph indices might be thrown off by the new
        // changes, consolidate the changes with the current comments.
        post.paragraphs = new_paras;
        post.comments = consolidateComments(old_paras, new_paras, post.comments);

        return post;
    }

    return false;
};
exports.getAllComments = function(post_id) {
    return (isValidPost(id) ? posts[post_id].comments : null);
};

exports.getComment = function(post_id, id) {
    return (isValidComment(post_id, id) ? posts[post_id].comments[id] : null);
};

exports.addComment = function(post_id, content) {
    if (isValidPost(post_id)) {
        var comment = {};
        var post = posts[post_id];
        
        comment.content = content;

        post.comments.push(comment);
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
