function main(){
  //$('body>h1').hide()
//  $('.bio').hide()
//you can chain lines of code together in jquery
  $('.bio').hide().fadeIn(2000)
  $('.items').hide()

  $('.button').on('click', function(){
    //$('.items').slideToggle(300)
    //$('.button').toggleClass('active')
    //$('.button').text('Viewed')
//this makes it so only one is showing at a time when you click on it
    $(this).toggleClass('active')
    $(this).text('Viewed')
    $(this).next().slideToggle(300)
  })
}





//make sure you include the link in the html and then add the ready 
$(document).ready(main)
