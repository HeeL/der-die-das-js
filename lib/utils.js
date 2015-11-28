"use strict";

module.exports = {
    isContain: function(content, match) {
        return content.toLowerCase().match(match.toLowerCase());
    }
}
