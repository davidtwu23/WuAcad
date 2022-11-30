// this javascript is used for interactive courses

//init progress bar first
updateProgressBar();

// receive the answers from user -> answers[]
form.addEventListener(
  "submit",
  (event) => {
    const data = new FormData(form);
    let output = "Your choices:\r";
    for (const entry of data) {
      output = `${output}${entry[0]} is  ${entry[1]}\r`;
      // get index
      var k = parseInt(entry[0].slice(-1),10) - 1;
      answers[k] = entry[1];
    }   
    updateScores(tableName);
    updateProgress(tableName,idx_day); // update  day progress
    // update cookie
    updateArrayCookie("progressCookie", progress);
    updateProgressBar();
    output = `${output}Progress for Day-` + idx_day + ` is: ${progress[idx_day-1]}%\r`; 
    log.innerText = output;
    event.preventDefault();
  },
  false
);


// update score table and progress
function updateScores(tableName){
    // update score
    var scores = document.getElementById(tableName).rows[1].cells;
    for(let i=0;i<num_Q;i++){
      if(answers[i]){
        if(answers[i] == answerKeys[i] ){
          scores[i].innerHTML = "&#10004;";
        }
        else{
          scores[i].innerHTML = "&#10008;";
        }
      }
      else{
        scores[i].innerHTML = "";
      }
    }
} 

function updateProgress(tableName,idx_day){
    var scores = document.getElementById(tableName).rows[1].cells;
    var count = 0;
    for(let i=0;i<num_Q;i++){
      if(answers[i]){
        if(answers[i] == answerKeys[i] ){
          count ++;
        }
      }
    }
    progress[idx_day -1] = count/num_Q*100;
}
  

// show previous question
function preQuestion(){
  hideAllQuestions();
  if(cur_Q > 1){
    showQuestion(cur_Q-1 );
    cur_Q --;
  }
  else{
    showQuestion(1); 
  }
};

// show next question
function nextQuestion(){
  hideAllQuestions();
  if(cur_Q < num_Q){
    showQuestion(cur_Q +1 );
    cur_Q ++;
  }
  else{
    showQuestion(num_Q); 
  }
};

// show a specific question
function showQuestion(index_Q){
  var y = document.getElementById("Q-" + index_Q);
    y.value = index_Q;
    y.style.display = "list-item";   
}; 

// hide all questions no shown
function hideAllQuestions(){
  for (let i=1; i<=num_Q; i++){
    var x = document.getElementById("Q-"+ i);
    x.style.display = "none";
  }
};  

function updateProgressBar(){
  for(let i=1; i<=num_days; i++){
     let name = "progress-day-" + i;
  document.getElementById(name).value = progress[i-1];
  } 
}
  