class produto {

    constructor() {
      this.id = 1;
      this.arrayProdutos =[]
    }
  
    adicionar() {
     let produtos = this.lerDados()
     if(this.validar(produtos) == true) {
        this.salvar(produtos)
     }
     this.listar()

    }

    lerDados() {
      let produtos ={}

      produtos.id = this.id;
      produtos.nome = document.getElementById('pdnome').value
      produtos.nome = document.getElementById('pdpreco').value

      return produtos
    }
    
    validar(produtos){
        let msg = '';

        if(produtos.nomeProduto == ''){
            msg += 'Prencha com o nome do produto \n'
        }

        if(produtos.precoProduto == ''){
            msg += 'Prencha com o preço do produto \n'
        }
        if(msg !=''){
            alert(msg)
            return false
        }
        return true

    }

    salvar(produtos){
        this.arrayProdutos.push(produtos)
        this.id++;
    }
      
    listar(){
        let tbody = document.getElementById('tbody')
        tbody.innerText = ''

        for(let i = 0; i < this.arrayProdutos.length; i++){

            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_delete = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nomeProduto
            td_preco.innerText = this.arrayProdutos[i].precoProduto
            let imagem = document.createElement('img')
            imagem.sec = 'trash.png'
            td_delete.appendChild(imagem)

        }
    }

}
  
var produtos = new produto();
  