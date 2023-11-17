$(document).ready(function () {
    $(".lock").click(function () {
      $(this).toggleClass('unlocked');
    });
  });

  function onBtnClickHandle(){
    setTimeout(function(){ 
    window.location="\song.html"
 }, 300);
}