import Vue from 'vue'
import App from './App.vue'
require('style-loader!css-loader!sass-loader!materialize-css/sass/materialize.scss');
//require('url-loader?style-loader/url!css-loader!https://fonts.googleapis.com/icon?family=Material+Icons');
new Vue({
  el: '#app',
  render: h => h(App)
})
