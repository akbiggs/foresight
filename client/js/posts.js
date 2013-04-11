// posts.js
// Manages posts on the client-side.

var HOST = "localhost:8888";

var posts = {
    
    /**
     * Object that renders posts.
     */
    renderer: new Showdown.converter(),

    /**
     * Get and render all posts.
     */
    getAllPosts: function() {
        $.get("localhost:8888/posts", function(received) {
            $.each(received, function(index, received) {
                posts.renderPost(post);
            });
        });
    },

    renderPost: function(post) {
        renderedParas = [];
        $.each(post.paragraphs, function(index, paragraph) {
            var html = "";

            html += "<div class='paragraph'>";
            html += this.renderer.makeHTML(paragraph);
            html += "</div>"

            renderedParas.push(html);
            $("#posts").append(html);
        });
    }
};
