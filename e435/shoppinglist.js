// Vue Material plugin
Vue.use(VueMaterial);

// Vue Material theme
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'grey',
  warn: 'red',
  background: 'white'
});

// this is the Vue.js app
var app = new Vue({
  el: '#app',
  data: {
    pagetitle: 'Menu435c',
  }
});