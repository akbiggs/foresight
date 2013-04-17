/**
 * Sends an HTTP response with a 404 message.
 *
 */
function send404(message, response) {
  response.writeHead(404, {
    'Content-Type': MIME_TYPES['.html']
  });
  response.end("404: " + message + "\n");
}

exports.send404 = send404;