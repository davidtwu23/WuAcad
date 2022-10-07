// the following is to realize a google search on this local site
// it is connected to the search box of the navigation bar

const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'wuacademy.davidwu17.repl.co';

function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);
   
