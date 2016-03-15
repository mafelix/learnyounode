var fs = require('fs');
file = process.argv[2];

fs.readFile(file,function( err, data){
  if(err){
    console.log(err);
  }
  var counter = 0;
  var answer = data.toString().split('\n');

  for (i = 0; i < answer.length-1; i ++){
    counter += 1;
  }
  console.log(counter);
})
