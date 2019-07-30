new Vue({
  el: '#app',
  data () {
    return {
      message: 'Book List',
      books: null,
    }
  },
  mounted () {
    fetch(
      'https://script.google.com/macros/s/AKfycbx5U5G4Ox3TGGQyMJtpio3XBmQNhhhTEDS6sFKs1si3IaY2Zhb_/exec',
    )
      .then(res => res.json())
      .then(
      result => {
        this.books = result
      },
      error => {

      },
    );
  }
})