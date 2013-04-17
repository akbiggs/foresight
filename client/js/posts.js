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

    //counts how many posts have been rendered so far so that each can be given a unique id
    //this is just temporary, really the post ids should be tied in with the ids we are using 
    //to store the posts in the server
    postCounter : 0, 

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

            html += "<div class='post' id='post" + posts.postCounter + "'>";
            html += posts.renderer.makeHtml(paragraph, posts.postCounter);
            html += "</div>"

            renderedParas.push(html);
            $("#posts").append(html);

            //increment the post counter
            posts.postCounter++;
        });
    }
};
