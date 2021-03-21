$(window).scroll(function () {
  if ($("#menu").offset().top > 1) {
    $("#menu").addClass("bg-dark");
  } else {
    $("#menu").removeClass("bg-dark");
  }
});
