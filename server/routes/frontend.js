var fs = require("fs");
var MIME_TYPES = require("./types").MIME_TYPES;
var default_res = require("./default_res");
/**
* Sends HTML home page to client
**/
var serveHome = function(request, response) {
	//ensure this is a GET
	if (request.method != "GET") {
        default_res.send404("Only GET is valid.", response);
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
        default_res.send404("Only GET is valid.", response);
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
        default_res.send404("Only GET is valid.", response);
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
    default_res.send404("Resource does not exist.", response)
  } else {
    response.write(data);
    response.end();
  }
};


exports.serveHome = serveHome;
exports.serveJS = serveJS;
exports.serveCSS = serveCSS;