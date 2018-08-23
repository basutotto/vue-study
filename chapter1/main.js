let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    list: ['りんご','ぶどう','バナナ'],
    show: true
  },
  methods: {
    handleClick: function(event) {
      alert(event.target);
    }
  }
})