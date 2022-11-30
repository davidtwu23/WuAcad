// cookie related functions

function setArrayCookie(cname, carray){
  document.cookie = cname + "="+ JSON.stringify(carray); 
}

function getArrayCookie(cookieName) {
    var name = cookieName + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if ((c.indexOf(name)) == 0) {
            return c.substr(name.length);
        }
    }
    return "";
}

function recoverArrayFromCookie(cookieName){
  var c = getArrayCookie(cookieName);
  if (c){
    return JSON.parse(c);
  }
  else{
    return [];
  }
}

function updateArrayCookie(cookieName, carray){
  setArrayCookie(cookieName, carray);
}


function clearCookie(cname){
  document.cookie = cname + "=";
}

// set string cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// get string cookie
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// check string cookie
function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}