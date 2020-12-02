const app = new Vue({
  el: '#app',
  data: {
    lists: [
      {
        title: 'Groceries',
        color: 'primary',
        items: [
          {
            title: 'Milk',
            complete: false
          },
          {
            title: 'Eggs',
            complete: false
          }
        ]
      },
      {
        title: 'To Do',
        color: 'danger',
        items: [
          {
            title: 'Finish Homework',
            complete: false
          }
        ]
      }
    ]
  },
  mounted: function () {
    const lists = localStorage.getItem('lists')

    if (lists) {
      this.lists = JSON.parse(lists)
    }
  },
  methods: {
    addItem: function (item) {
      this.lists[item.list].items.push({ title: item.title, complete: false })
      this.saveLists()
    },
    addList: function (list) {
      this.lists.push({ ...list, items: [] })
      this.saveLists()
    },
    saveLists: function () {
      localStorage.setItem('lists', JSON.stringify(this.lists))
    }
  },
  router
})
