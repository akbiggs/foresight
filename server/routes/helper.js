// helper.js
// Helper methods for server.

var allowCrossOrigin = function(res) {
    res.set("Access-Control-Allow-Origin");
    res.set("Access-Control-Allow-Headers", "X-MYRESPONSEHEADER");
};

exports.allowCrossOrigin = allowCrossOrigin;
