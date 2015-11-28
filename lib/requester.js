"use strict";

const http = require('http');

module.exports = function(word, callback) {
    return http.get({
        host: 'pocket.dict.cc',
        path: `/?s=${word}`
    }, function(response) {
        let body = '';

        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
            callback(body);
        });
    });
}
