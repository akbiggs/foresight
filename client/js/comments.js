// comments.js
// Functions for handling comments on the client side.
var comments = {
    
    /**
     * Render comments for a given post.
     * Optionally takes a paragraph index (starting at zero), in which case only
     * renders comments from the given paragraph.
     */
    renderComments: function(post, paraIndex) {
        if (paraIndex !== undefined) {
            // only render comments from the given paragraph
        } else {
            // render all the comments from the post
            $.each(post.comments, function(index, comment) {
                var shtml = renderComment(comment);
                
            });
        }
    },
    
    /**
     * Return the rendered html for the given comment object.
     */
    renderComment: function(comment) {
        var shtml = "";
        shtml += comments.renderAuthor(comment);
        shtml += comments.renderContent(comment);
        return shtml;
    },

    renderAuthor: function(comment) {
        return "<p class='author'>" + comment.author + "</p>";
    },

    renderContent: function(comment) {
        return "<p class='content'>" + comment.content + "</p>";
    },

    render
};
