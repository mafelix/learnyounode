var fs = require('fs');
file = process.argv[2];

var data = fs.readFileSync(file)

  var obj = data.toString();
  var str = obj.split('\n');
  var counter = 0;
  for(var i = 0; i < str.length ; i ++){
    counter += 1;
  }
  console.log(counter-1);
