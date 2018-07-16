import '../scss/style.scss';
import $ from 'jquery';
import getElement from './utils';

const banner = require('../images/iStock-91133060.jpg');

const app = getElement('app');
app.style.backgroundColor = '#f1f1f1';
app.style.backgroundImage = banner;
app.style.width = '100vw';
app.style.height = '100vh';

// custom.js code moved here
$(document).ready(() => {
  $('#navigation').slimmenu({
    resizeWidth: '800',
    collapserTitle: '',
    animSpeed: 0,
    easingEffect: null,
    indentChildren: false,
    childrenIndenter: '&nbsp;',
    expandIcon: '',
    collapseIcon: '',
  });
});
