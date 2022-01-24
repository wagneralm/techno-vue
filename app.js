const vm = new Vue({
  el: "#app",
  data: {
    produtos: [],
    produto: false
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
    },
    fetchProduto(id){
      fetch(`./api/produtos/${id}/dados.json`)
      .then(response => response.json())
      .then(response => {
        this.produto = response;
      });
    }
  },
  created() {
    this.fecthProdutos();
  }
})