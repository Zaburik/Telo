import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

import modals from './modules/modals';
import scrollMenu from './modules/scrollMenu';
import scrollSnap from './modules/scrollSnap';
import arrowScrollSnap from './modules/arrowScrollSnap';
import showStickyMenu from './modules/showStickyMenu';
import calc from './modules/calc';
import postEdit from './modules/post.js';
import sliderClients from './modules/sliderClients';
import accordion from './modules/accordion';
import formProccessing from './modules/formProccessing';
import partnerSlider from './modules/partnerSlider';



// menus popup
modals();
// scroll anchor
scrollMenu('.two', 'a');
scrollMenu('.two-mini', 'a');
scrollMenu('.footer-top', 'a');
// // scroll snap
scrollSnap('body','section');
arrowScrollSnap('body', '.arrow-down-link');
// mini menu
showStickyMenu('.two-mini');
//calc
calc('.calc-container', '#select-calc', '.radio-btn-parent', '#total-price');
// posts editing 
postEdit();
//client slider
sliderClients('.btn-client-right', '.btn-client-left', '#client-slider', '.sl2-slide');
// accordeon
accordion();
//form stuff
//support form
formProccessing('.form__support', '.user_email-support', '.user_name-support');
//offer form
formProccessing('.form__offer', '.user_email-offer', '.user_name-offer');
// partners slider
partnerSlider('.btn-partner-right', '.btn-partner-left', '.sl-slide', '.sl-container');
