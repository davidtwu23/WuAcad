function countFiles(path)
{
  var fs = require('fs');
  var N = fs.readdir(path, function(error, files) {
  return files.length;
} );
  console.log(N);
  return N;
}