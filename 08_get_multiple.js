var http = require('http');


http.get(process.argv[2],function(response){
  var string = "";
  //async function get in chunks
  response.setEncoding('utf8')
  response.on("data",function(data){
      string += data;
      // console.log(result);
      // newArr.push(result);

  response.on('end',function(){
    console.log(string.length);
    console.log(string).split('\n');
    // console.log('closed connections!');
    // console.log(newArr[1] + newArr[2]);
    });
  });
});
