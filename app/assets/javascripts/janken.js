//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery

$(function(){
  document.addEventListener("keydown", function(e) {
    if (e.code === "Space") {
      this.querySelector("a").click();
    }
  });
});

