// need to define 3 inputs: 
// [1] "element_id" is the image object in HTML
// [2] "image_path" is the folder that contains the sequence of images
// [3] "num_images" is the length of the image sequence
// Note: images must be names like "1.jpg"


// the following are the set of functions use to perform interactive animation of an image sequence. When the mouse is clicked on the image, it toggles between stop/resume the animation

// start/stop the animation
var myInterval;
function imagechange()
{
 // starts a timer. it uses 1000ms 
  myInterval = setInterval("animate()",1000);
}

function stop()
{
  clearInterval(myInterval);    
}

// loop the animation
// forming a name list for the image files, like images=["1","2",...]
var images = [];
for(let i=1; i<=num_images; i++){
  images.push(i.toString());
}

var k=0;
function animate()
{
  if(k>=images.length){
    k=0;
  }
  if(k>=0){
    document.getElementById(element_id).src= image_path + "/" + images[k] +".jpg";
    k ++;
  }
}

// toggle between stop/resume on mouse click event
var flag=0;
function toggle()
{
  if (flag==0){
    flag = 1;
    stop();
  }
  else{
    flag = 0;
    imagechange();
  }
}
