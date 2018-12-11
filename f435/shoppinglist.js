// Vue Material plugin
// Vue.use(VueMaterial);
Vue.use(VueMaterial.default)


// Vue Material theme
// Vue.material.registerTheme('default', {
//   primary: 'blue',
//   accent: 'grey',
//   warn: 'red',
//   background: 'white'
// });

const toLower = text => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter(item => toLower(item.name).includes(toLower(term)));
  };

  return items; 
};




// this is the Vue.js app
var app = new Vue({
  el: '#app',
  data: {
    pagetitle: 'Menu435c',
    item: [],
    search: null,
    searched: [],
    users: [

      {
        id: 1,
        name: "Shawna Dubbin",
        email: "sdubbin0@geocities.com",
        gender: "Male",
        title: "Assistant Media Planner"
      },
      {
        id: 2,
        name: "Odette Demageard",
        email: "odemageard1@spotify.com",
        gender: "Female",
        title: "Account Coordinator"
      },
      {
        id: 3,
        name: "Vera Taleworth",
        email: "vtaleworth2@google.ca",
        gender: "Male",
        title: "Community Outreach Specialist"
      },
      {
        id: 4,
        name: "Lonnie Izkovitz",
        email: "lizkovitz3@youtu.be",
        gender: "Female",
        title: "Operator"
      }
    ]  
  },
  methods: {
    newUser () {
      window.alert('Noop');
    },
    searchOnTable () {
      this.searched = searchByName(this.users, this.search);
    }
  },
  created () {
    this.searched = this.users;
  }



});



