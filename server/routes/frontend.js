var fs = require("fs");
var MIME_TYPES = require("./types").MIME_TYPES;

/**
* Sends HTML home page to client
**/
var serveHome = function(request, response) {
	//ensure this is a GET
	if (request.method != "GET") {
        send404("Only GET is valid.", response);
        return;
    }

    //set up header in anticipation of having data to send
    response.writeHead(200, {'Content-Type': MIME_TYPES[".html"]});
    var buffer = fs.readFile('../client/index.html',
							function(err, data) {
								serveFile(err, data, response);
							});
};

/**
* Sends any CSS files to client.
**/
var serveCSS = function(request, response) {
	//ensure this is a GET
	if (request.method != "GET") {
        send404("Only GET is valid.", response);
        return;
    }

    var resourceURL = '../client' + request.ur
    console.log("Serving: " + resourceURL)
    
    //set up header in anticipation of having data to send
	response.writeHead(200, {"Content-Type": MIME_TYPES[".css"]});
	var buffer = fs.readFile(resourceURL,
							function(err, data) {
								serveFile(err, data, response);
							});
};

/**
* Sends any JS files to cleint.
**/
var serveJS = function(request, response) {
	//ensure this is a GET
	if (request.method != "GET") {
        send404("Only GET is valid.", response);
        return;
    }

    var resourceURL = '../client' + request.url;
    console.log("Serving: " + resourceURL)

    //set up header in anticipation of having data to send
	response.writeHead(200, {"Content-Type": MIME_TYPES[".js"]});
	var buffer = fs.readFile(resourceURL,
							function(err, data) {
								serveFile(err, data, response);
							});
}

/**
 * callback, sends input data to the server
 */
function serveFile(err, data, response) {
  if (err) {
    // Overwrite the header with a 404 error.
    send404("Resource does not exist.", response)
  } else {
    response.write(data);
    response.end();
  }
};

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

exports.serveHome = serveHome;
exports.serveJS = serveJS;
exports.serveCSS = serveCSS;