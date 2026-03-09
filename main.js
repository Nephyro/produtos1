'use strict'

function adicionarProduto() {
    const lista1 = document.getElementById('cd')
    const lista2 = document.getElementById('pt')
    const lista3 = document.getElementById('quant')

    const produtoNome = document.getElementById('produtoNome')
    const quantidadeProduto = document.getElementById('quantidadeProduto')
    // const codigoProduto = document.getElementById('codigoProduto')

    if(produtoNome.value === '' || quantidadeProduto.value === ''){
        alert('Erro! Preencha todos os campos')
        return
    }else if(isNaN(quantidadeProduto.value)){
        alert('Erro! Preencha o campo "Qtde de produto" apenas com números')
        return
    }else if(!isNaN(produtoNome)){
        alert('Erro! O campo "Produto" deve conter Apenas letras')
        return
    }

    const numeroProduto = Math.floor(Math.random() * 100000000)

    const span1 = document.createElement('span1')
    span1.textContent = numeroProduto
    span1.className = 'bg-blue-100 px-8 px-2 rounded-sm'
    lista1.appendChild(span1)

    const span2 = document.createElement('span2')
    span2.textContent = produtoNome.value
    span2.className = 'bg-blue-100 px-8 px-2 rounded-sm'
    lista2.appendChild(span2)

    const span3 = document.createElement('span3')
    span3.textContent = quantidadeProduto.value
    span3.className = 'bg-blue-100 px-8 px-2 rounded-sm'
    lista3.appendChild(span3)


    produtoNome.value = ''
    quantidadeProduto.value = ''
    produtoNome.focus()
}