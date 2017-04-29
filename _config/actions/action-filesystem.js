'use strict';

const fs = require('fs');

const fso = {};

fso.createFolder = (folderPath, callback) => {
    fs.mkdir(folderPath, (err) => callback(err, folderPath));
};

fso.saveImage = (filePath, imageBase64, callback) => {
    fs.writeFile(filePath, imageBase64, 'base64', (err) => callback(err, filePath));
};

module.exports = fso;