var read_module = require('./read_module.js');
var path = process.argv[2];
var ext = process.argv[3];

read_module(path, ext, function(err, newArr){
  if(err){
    console.log(err);
    return;
  }
  for(var i = 0; i < newArr.length; i ++){
    console.log(newArr[i]);
  }
});
