import * as g from './import/global.js';
import {common} from './import/common.js';

(($) => {
  var init = () => {
    common();
    console.log('initialized');
  };

  $(init);
})(jQuery);
