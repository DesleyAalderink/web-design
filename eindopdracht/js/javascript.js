var change = document.getElementById('change')
var newtext = document.getElementById('newtext')

function toggletext(){
  change.classList.toggle('none')
  newtext.classList.toggle('none')
}

function changenewtext(){
  newtext.classList.toggle('none')
}

function bgchange(){
  document.querySelector('body').classList.toggle('bg')
}

function focus(){
  console.log(document.querySelectorAll('summary')[0])
  document.querySelectorAll('summary')[0].focus();
}

document.querySelectorAll('button')[0].addEventListener("click", function(){
  focus();
})

setInterval(function() {
  toggletext()
}, 3000);

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

document.querySelectorAll('button')[3].addEventListener("click", function(){
  bgchange();
})
