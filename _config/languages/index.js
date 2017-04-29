'use strict';

module.exports = (language) => {
    return require('./inc/'+language);
};