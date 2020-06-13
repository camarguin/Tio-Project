$(document).ready(function () {
  $('#carousel').carousel({
    shift: 200,
    dist: -100,
    indicators: true,
    duration: 400,
  });
});
autoplay();
function autoplay() {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 5000);
}