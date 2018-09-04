let obj = {
  foo: 'bar'
}
// Object.freeze(obj)
let app = new Vue({
  el: '#app',
  data: obj
})

app.$watch('foo', (newValue, oldValue) => {
  console.log('new: ' + newValue, 'old: ' + oldValue);
})

let app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

let app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

let app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

let app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'a' },
      { id: 1, text: 'b' },
      { id: 2, text: 'c' }
    ]
  }
})

new Vue({
  data: {
    a: 1
  },
  created: function() {
    console.log('a is:' + this.a)
  }
})