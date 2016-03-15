var fs = require('fs');

module.exports = function readDir(path, extension, callback){
    fs.readdir(path, function(err, array){
      newArr = [];
      if(err){
        callback(err);
        return;
      }
      array.forEach(function(element){
        if(element.search(extension) > 1){
          newArr.push(element);
        }
      });
      callback(null, newArr);
    });
  }
