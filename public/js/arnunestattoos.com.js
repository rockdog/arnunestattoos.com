window.Site = {
  pageClosed: function() {
    if (History.enabled) {
      History.back();
    }
  }
};

$.extend($.fancybox.defaults, {
  autoSize: false
});

$(document).ready(function() {

  $(".js-link").on('click', function(event) {
    event.preventDefault();

    var page = $(this).data('page'),
        selector = "#" + page
    ;

    $.fancybox( $(selector).html(), {
      'afterClose': Site.pageClosed
    });

    if (History.enabled) {
      History.pushState( {page: page}, $('h1', selector).html(), page );
    }
  });

});
