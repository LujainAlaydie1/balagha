$(document).ready(function () {
    $(".lock").click(function () {
      $(this).toggleClass('unlocked');
    });
  });

  function onBtnClickHandle(location){
    setTimeout(function(){ 
    window.location= location 
 }, 300);
}