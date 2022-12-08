const fs = require('fs');
const XLSX = require('xlsx');

const express = require('express');//Set up the express module
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const path = require('path')//Include the Path module

app.use(bodyParser.json());
app.use(express.json());


const php = require('php')
// setup php templating engine
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


router.get('/blocking', function(req, res) {
  res.sendFile(path.join(__dirname, '/blocking.html'));
});
app.use('/blocking', router);

router.get('/passing', function(req, res) {
  res.sendFile(path.join(__dirname, '/passing.html'));
});
app.use('/passing', router);

router.get('/contact', function(req, res){
  res.sendFile(path.join(__dirname, '/contact.html'));
});
app.use('/contact', router);


router.get('/offense', function(req, res){
  res.sendFile(path.join(__dirname, '/offense.html'));
});
app.use('/offense', router);

router.get('/course', function(req, res){
  res.sendFile(path.join(__dirname, '/course.html'));
});
app.use('/course', router);

router.get('/course-p-1', function(req, res){
  res.sendFile(path.join(__dirname, '/course-p-1.html'));
});
app.use('/course-p-1', router);

router.get('/course-p-2', function(req, res){
  res.sendFile(path.join(__dirname, '/course-p-2.html'));
});
app.use('/course-p-2', router);

router.get('/course-p-3', function(req, res){
  res.sendFile(path.join(__dirname, '/course-p-3.html'));
});
app.use('/course-p-3', router);

router.get('/course-p-4', function(req, res){
  res.sendFile(path.join(__dirname, '/course-p-4.html'));
});
app.use('/course-p-4', router);

router.get('/course-p-5', function(req, res){
  res.sendFile(path.join(__dirname, '/course-p-5.html'));
});
app.use('/course-p-5', router);


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

// handling search query from client
app.post('/action_query', function(req,res) {
  // step 1: receive the query from the client
  const username = req.body.username;
  console.log(username);
  
  // step 2: open user-progress file
  var userDB = JSON.parse(fs.readFileSync('./user_progress.json').toString());
  //console.log(userDB.users;
  
  // step 3:search user database on the server
  var progress = [];
  for(let i=0;i<userDB.users.length;i++){
    if(userDB.users[i].username == username){
      progress = userDB.users[i].progress;
      break;
    }
  }
  console.log(progress);
  
  // step 4: response
  data = JSON.stringify(progress);
  res.send(data);
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
