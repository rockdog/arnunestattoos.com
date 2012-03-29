$(document).ready(function() {

  $("img").on('click', function(event) {
    event.preventDefault();
    $.extend($.fancybox.defaults, {
      autoSize: false
    });
    $.fancybox( $('.gallery').html());
  });

});

