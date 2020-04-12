//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require roulette

$(function(){
  document.addEventListener("keydown", function(e) {
    if (e.code === "Space") {
      $('div.roulette').roulette('start');
    }
  });
});

