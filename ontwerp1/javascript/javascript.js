for (let i = 0; i < document.getElementsByTagName('img').length; i++) {
    console.log('yo');
    document.querySelectorAll('img')[i].addEventListener('click', function(){
      console.log(i)
    document.querySelectorAll('section input')[i].checked = true
    document.querySelector('section').classList.remove('none');
    document.body.classList.add('no-scroll');
    })

}

document.querySelector('span').addEventListener('click', function(){
  document.body.classList.remove('no-scroll');
  document.querySelector('section').classList.add('none');
})
