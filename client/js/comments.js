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

    /**
    * Given the paragraph id that was clicked on, retrieve the 
    * relevent comments from the server.
    *
    * id comes in the form p_xx_yy where xx is the post index and
    * yy is the paragraph index within that post
    **/
    retrieveComments: function(id) {
        console.log(id);

        //make sure id is actually for a paragraph before going on
        if (id == undefined || id.indexOf("p_") != 0) {
            return;
        }

        //get the individual elements from the id
        var id_values = id.split("_");
        var post = id_values[1];
        var par = id_values[2];

        var url = "/post/comments?post=" + post + "&par=" + par;
        
        $.ajax({
          type: 'GET',
          dataType: "json",
          url: url,
          success: function(data) {
            //uhh do something with the comments data we should supposedly be getting back
          }
        });
    }
};
