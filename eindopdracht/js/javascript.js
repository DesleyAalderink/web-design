var change = document.getElementById('change')
var newtext = document.getElementById('newtext')

function changetext(){
  change.classList.add('none')
}

function changenewtext(){
  newtext.classList.remove('none')
}

setTimeout(function() {
  changenewtext(newtext)
}, 3000);

setTimeout(function() {
  changetext(change)
}, 3000);

document.querySelector('button').addEventListener("click", function() {
  window.scrollTo(0,0)
})

document.querySelectorAll('button')[1].addEventListener("click", function(e){
  e.preventDefault()
})

document.querySelectorAll('button')[2].addEventListener("click", function(e){
  e.preventDefault()
})

// Twitter //

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
