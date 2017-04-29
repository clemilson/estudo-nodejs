'use strict';

const fs            = require('fs');
const path          = require('path');
const MODULES_PATH  = './modules/';

const getModules = (strPath) => {
    return fs.readdirSync(strPath).filter(function(file) {
        const isDirectory = fs.statSync(path.join(strPath, file)).isDirectory();
        return isDirectory && (file !== '_common');
    });
};

module.exports = getModules(MODULES_PATH);