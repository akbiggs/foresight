var MIME_TYPES = require("./types").MIME_TYPES;
var default_res = require("./default_res");

comments = []

/**
*  Returns the JSON for the comments for the paragraph
*  specified by the two parameters in the request url.
**/
var getComments = function(request, response) {
	console.log("NOT GETTING HERE :(");

    var parsedURL = req.url.parse(request.url, true);
    console.log(parsedURL);

    response.writeHead(200, {"Content-Type": MIME_TYPES[".json"]});
    response.end([]);
};

var addComment = function(req, res) {
    // TODO: Implement this
};

var modifyComment = function(req, res) {
    // TODO: Implement this
};

var removeComment = function(req, res) {
    // TODO: Implement this
};

/* EXPORTS */
exports.getComments = getComments;
exports.addComment = addComment;
exports.modifyComment = modifyComment;
exports.removeComment = removeComment;
