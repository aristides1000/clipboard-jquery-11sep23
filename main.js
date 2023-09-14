$(document).ready(function () {
  // build two functions that add and remove the class in the span tag
  function add() {
    $(".copied").addClass("d-none");
  }

  function remove() {
    $(".copied").removeClass("d-none");
  }

  // We call the functions and copy the text with th click button
  add();
  $(".copy-btn").click(function () {
    $("#textField").select();
    document.execCommand("copy");
    remove();
    setTimeout(add, 800);
  });
});