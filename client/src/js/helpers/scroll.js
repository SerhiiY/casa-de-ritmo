//scroll page to link anchor
export default function () {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#toTopLink').fadeIn();
    } else {
      $('#toTopLink').fadeOut();
    }
  });
  $('a').click(function() {
    $('body,html').animate({scrollTop:-100},500);
  });
}


  // $(document).ready(function () {
  //   $("a[href*=#]").on("click", function (e) {
  //     var anchor = $(this);
  //     $('html, body').stop().animate({scrollTop: $(anchor.attr('href')).offset().top - 100}, 300);
  //     e.preventDefault();
  //     return false;
  //   });
  // });
