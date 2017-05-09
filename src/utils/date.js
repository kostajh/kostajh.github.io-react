import React from 'react';
var moment = require('moment');

function RenderDate (isoDate) {
  const formattedDate = moment(isoDate).format('M/D/Y').trim();
  return (
     <div>{formattedDate}</div>
  );
}

module.exports = {
  RenderDate: function (isoDate) {
    return RenderDate(isoDate);
  }
}
