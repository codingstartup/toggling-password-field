new Vue({
  el: '#app',
  data: {
    isHide: false,
    type: 'text',
  },
  watch: {
    isHide(hide) {
      setTimeout(() => {
        this.type = (hide) ? 'password' : 'text'
      }, 200)
    }
  }
})