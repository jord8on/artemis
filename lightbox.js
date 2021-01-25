/*
  Plugin Name: Diziana Lightbox Plugin
  Version: 2.0
  Author: Allies Interactive
  Website: http://www.diziana.com/
  Corporate Website : http://www.diziana.com
  Contact: support@diziana.com
  Follow: https://www.twitter.com/dizianaEngage
  Like: https://www.facebook.com/diziana.engage
  Purchase: Diziana.com
  License: You must have a valid license purchased only from
  diziana.com in order to legally use the theme for your project.
  Copyright: © 2017 Allies Interactive. All Rights Reserved
*/

(function(_w, _d, $) {

  $(_w).load(function() {

    // Single Image View
    $('.article-body').each(function(idx, itm) {
      var _itm = $(itm), _itmImg = _itm.find('img');
      $('a.image-popup').click(function(e) { e.preventDefault(); });
      
      $('body').append('<div class="popup-view"><img src="" /></div>');
      $('div.popup-view').click(function(e) {
        $('div.popup-view').hide();
      });
      
      _itmImg.each(function(_idx, _img) {
        if((typeof _img.naturalWidth != 'undefined' && _img.naturalWidth > 50) || typeof _img.naturalWidth == 'undefined') {
          _itm.addClass('allow-magnify');
          $(_img).click(function(e) {
            $('div.popup-view > img').attr('src', $(e.target).attr('src'));
            $('div.popup-view > img').css('marginLeft', -(($(e.target).get(0).naturalWidth / 2)));
            $('div.popup-view').show();
          });
        }
        else {
          _itm.removeClass('image-popup').attr('href', 'javascript:void(0);');
        }
      });
    });

    /* setTimeout(function() {
      
      $('a.image-popup.allow-magnify').mouseout(function() {
        $(this).find('img').css('opacity', 1); 
      }).mouseover(function() {
        $(this).find('img').css('opacity', 0.3); 
      }).magnificPopup({type:'image'});
    }, 500); */

    // Gallery View
    if(typeof $('.gallery-image-popup').get(0) != 'undefined' ) {

      $('.gallery-image-popup').each(function(indx, itm) {
        var _itm = $(itm), _itmImg = _itm.find('img');

        if((typeof _itmImg.get(0).naturalWidth != 'undefined' && _itmImg.get(0).naturalWidth > 500) || typeof _itmImg.get(0).naturalWidth == 'undefined') {
          _itm.addClass('allow-magnify');
        }
        else {
          _itm.find('a').attr('href', 'javascript:void(0);');
        }

      });

      setTimeout(function() {

        $('.gallery-image-popup.allow-magnify').magnificPopup({
          delegate: 'a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
              return item.el.attr('title');
            }
          }
        });

      }, 500);
    }

  });

}(window, document, jQuery));