const vm = new Vue({
  el: "#app",
  data: {
    produtos: []
  },
  filters: {
    numeroPreco(valor){
      return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL"});
    }
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