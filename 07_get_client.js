var http = require('http');
var url = process.argv[2];

// FELIX'S SOLUTION
// http.get(url, function(response){
//   response.on("data", function(data){
//     var result = data.toString();
//     console.log(result);
//   })
// });



  http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
  })
