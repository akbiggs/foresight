// posts.js
// Manages posts on the client-side.

var HOST = "localhost:8888";

$.ajaxSetup({
  error: function(xhr, status, error) {
      alert("An AJAX error occured: " + status + "\nError: " + error);
  }
});

var posts = {
    
    /**
     * Object that renders posts.
     */
    renderer: new Showdown.converter(),

    /**
     * Get and render all posts.
     */
    getAllPosts: function() {
        $.getJSON("http://localhost:8888/posts", function(received) {
            $.each(received, function(index, post) {
                posts.renderPost(post);
            });
        });
    },

    renderPost: function(post) {
        renderedParas = [];
        $.each(post.paragraphs, function(index, paragraph) {
            var html = "";

            html += "<div class='paragraph'>";
            html += posts.renderer.makeHtml(paragraph);
            html += "</div>"

            renderedParas.push(html);
            $("#posts").append(html);
        });
    }
};
