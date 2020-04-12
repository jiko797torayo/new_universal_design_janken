$(function(){

  document.addEventListener("keydown", function(e) {
    if (e.code === "Space") {
      this.querySelector("a").click();
    }
  });

  //最初の画像以外を非表示にする
  $(".random a img:gt(0)").hide();
  //タイマー
  setInterval(function() {
       //フェードインとアウトを繰り返す
      $(".random a :first-child").fadeOut().next("img").fadeIn().end().appendTo(".random a");
  }, 100);
});

