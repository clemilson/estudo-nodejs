'use strict';

module.exports = (res, data) => {
  return res.status(401).json({message: data});
};