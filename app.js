const vm = new Vue({
  el: "#app",
  data: {
    produtos: []
  },
  methods: {
    fecthProdutos(){
      fetch("./api/produtos.json")
      .then(response => response.json())
      .then(response => {
        this.produtos = response;
      })
    }
  },
  created() {
    this.fecthProdutos();
  }
})