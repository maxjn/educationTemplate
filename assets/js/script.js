$(function () {
  $("#menu-btn").click(function () {
    if ($(this).hasClass("icon-bars")) {
      $(this).addClass("icon-cross");
      $(this).removeClass("icon-bars");
    } else {
      $(this).addClass("icon-bars");
      $(this).removeClass("icon-cross");
    }
    $(".header-nav").toggleClass("active");
  });
});
