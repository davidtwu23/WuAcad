const express = require('express');//Set up the express module
const app = express();
const router = express.Router();
const path = require('path')//Include the Path module

// enable css styles
app.use(express.static('public'));

//Set up the Express router
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/index.html'));
});
app.use('/', router);

//Navigate your website
router.get('/serving', function(req, res){
  res.sendFile(path.join(__dirname, '/serving.html'));
});
app.use('/serving', router);


router.get('/defense', function(req, res){
  res.sendFile(path.join(__dirname, '/defense.html'));
});
app.use('/defense', router);

router.get('/passing', function(req, res){
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

router.get('/testing', function(req, res){
  res.sendFile(path.join(__dirname, '/testing.html'));
});
app.use('/testing', router);


//404 Error
app.use(function(req, res, next) {
    res.status(404);
    res.sendFile(__dirname + '/404.html');
});


//set up the Express server to listen on port 3000 and logs some messages when the server is ready
let server = app.listen(3000, function(){
  console.log("App server is running on port 3000");
});