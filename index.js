"use strict";

const cheerio = require('cheerio');
const requester = require('./lib/requester');
const utils = require('./lib/utils');

const derDieDas = module.exports = {

    checkWord: function(word, callback) {
        requester(word, function(html) {
            const $ = cheerio.load(html);
            const page_content = $('body').text();
            let result = '';

            if (utils.isContain(page_content, `${word} {f}`)) {
                result = 'die';
            } else if (utils.isContain(page_content, `${word} {m}`)) {
                result = 'der';
            } else if (utils.isContain(page_content, `${word} {n}`)) {
                result = 'das';
            }
            return callback(result);
        });
    }
}
