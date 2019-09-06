//scroll page to link anchor
export default function () {
  $(document).ready(function () {
    $("a[href*=#]").on("click", function (e) {
      var anchor = $(this);
      $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 100}, 300);
      e.preventDefault();
      return false;
    });
  });
}