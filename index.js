'use strict';

module.exports = function npmFilter(tweetText){
  if(tweetText.constructor !== String){
    return undefined;
  }

  var parts = tweetText.trim().split(/\s+/);

  if(parts.length < 3){
    return undefined;
  }

  if(parts[0][0].toUpperCase() === 'N'
    && parts[1][0].toUpperCase() === 'P'
    && parts[2][0].toUpperCase() === 'M'){
      return parts[0] + ' ' + parts[1] + ' ' + parts[2];
  }

  return undefined;
};
