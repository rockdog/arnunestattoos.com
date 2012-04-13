window.Site = {
  closePage: function() {
    if (History.enabled) {
      History.back();
    }
  },
  showPage: function(path, doc) {
    var title = $(doc).find('title').html(),
        content = $(doc).find('#page').html()
    ;

    $.fancybox(content, {
      'afterClose': Site.closePage
    });

    if (History.enabled) {
      History.pushState( {page: path}, title, path );
    }
  },
  showCurrentPage: function() {
    var content = $(document.body).find('#page').html();

    $.fancybox(content, {
      'afterClose': Site.showHomepage
    });
  },
  showHomepage: function() {
    document.location.href = '/';
  },
  detectDevice: function() {
    if ( Modernizr.mq('only screen and (max-width: 320px)') ) {
      $('html').addClass('phone portrait');
    } else if ( Modernizr.mq('only screen and (min-width: 321px) and (max-width: 480px)') ) {
      $('html').addClass('phone landscape');
    } else {
    }
  }
};

$.extend($.fancybox.defaults, {
  autoSize: false
});

$(document).ready(function() {

  $(".js-link").on('click', function(event) {
    event.preventDefault();

    var that = this,
        path = $(this).attr('href')
    ;

    $.ajax({
      url: path
    }).done(function (data) {
      Site.showPage(path, data);
    });

  });

});
