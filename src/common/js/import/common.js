import * as g from './global.js';

export function common() {
  // Smooth Scroll
  (() => {
    $('html').on('click', 'a[href^="#"]', function() {
      var href = $(this).attr('href');
      var $target = $(href === '#' || href === '' ? 'html' : href);
      var dest = $target.offset().top;
      $('body, html').animate({ scrollTop: dest }, 400);
      return false;
    });
  })();
}
