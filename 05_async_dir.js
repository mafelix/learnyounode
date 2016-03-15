var fs = require('fs');

var file = process.argv[2];
var extension = process.argv[3];

fs.readdir(file, function(err, array){
  newArr = [];
  if(err){
    console.log(err);
  }
  array.forEach(function(element){
      if(element.search(extension) > 1){
        newArr.push(element);
      }
      // console.log(element.search(extension));
      // console.log(element);
      // newArr.push(element);
  });
  newArr.forEach(function(element){
    console.log(element);
  });
  // console.log(newArr);
});

/*  official answer with the path module
    var fs = require('fs')
    var path = require('path')

    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })*/
