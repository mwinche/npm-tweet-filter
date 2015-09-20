'use strict';

module.exports = function npmFilter(tweetText){
  if(tweetText.constructor !== String){
    return undefined;
  }

  var parts = tweetText.trim().split(\/s+\);

  if(parts[0][0].upperCase() === 'N'
    && parts[1][0].upperCase() === 'P'
    && parts[2][0].upperCase() === 'M'){
      return parts[0] + ' ' + parts[1] + ' ' + parts[2];
  }

  return undefined;
};
