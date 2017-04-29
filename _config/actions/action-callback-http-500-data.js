'use strict';

module.exports = (res, data) => {
  return res.status(500).json(data);
};