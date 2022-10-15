const fs = require('fs');
const XLSX = require('xlsx');

const express = require('express');//Set up the express module
const app = express();
const router = express.Router();
const path = require('path')//Include the Path module

const php = require('php')
// setup php templating engine
app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'php')
app.engine('php', php.__express)


// enable css styles
app.use(express.static('public'));

//Set up the Express router
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.use('/', router);

//Navigate your website
router.get('/serving', function(req, res) {
  res.sendFile(path.join(__dirname, '/serving.html'));
});
app.use('/serving', router);


router.get('/defense', function(req, res) {
  res.sendFile(path.join(__dirname, '/defense.html'));
});
app.use('/defense', router);

router.get('/passing', function(req, res) {
  res.sendFile(path.join(__dirname, '/passing.html'));
});
app.use('/passing', router);

/*
router.get('/tactics', function(req, res){
  res.sendFile(path.join(__dirname, '/tactics.html'));
});
app.use('/tactics', router);


router.get('/offense', function(req, res){
  res.sendFile(path.join(__dirname, '/offense.html'));
});
app.use('/offense', router);
*/

router.get('/testing', function(req, res) {
  res.sendFile(path.join(__dirname, '/testing.html'));
});
app.use('/testing', router);



app.get('/action_page.php', function(req, res) {
  response = {
    first_name: req.query.fname,
    last_name: req.query.lname,
    email: req.query.email,
    comment: req.query.comment
  };
  console.log(response);
  data = JSON.stringify(response);
  //console.log(data);
  fs.appendFile('comments.json',data, err => {
    if (err){
      throw err
    }
    console.log('JSON data is appended.')
  })
  //JSON2Excel([data]); // XLXS genertes corrupted file
  res.sendFile(path.join(__dirname, '/action.html'));
});


//404 Error
app.use(function(req, res, next) {
  res.status(404);
  res.sendFile(__dirname + '/404.html');
});


//set up the Express server to listen on port 3000 and logs some messages when the server is ready
let server = app.listen(3000, function() {
  console.log("App server is running on port 3000");
});


// XLSX.writeFile generates corrupted .xlsx file!
// let's address this issue later, not now
 function JSON2Excel(data_json) {
  const workSheetName = 'Comments';
  const filePath = './comments.xlsx';
  const workSheetColumnName = [
    "First Name",
    "Last Name",
    "Email",
    "Comments"
  ] ;
   // create a new workbook
  const workBook = XLSX.utils.book_new(); 
  const workSheet = XLSX.utils.json_to_sheet(data_json);
  XLSX.utils.book_append_sheet(workBook, workSheet, workSheetName);
  XLSX.writeFile(workBook, path.resolve(filePath));
  return true;
}
