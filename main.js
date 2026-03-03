'use strict'

function adicionarProduto() {
    const lista1 = document.getElementById('cd')
    // const codigoProduto = document.getElementById('codigoProduto')

    const numeroProduto = Math.floor(Math.random() * 100000000)

    const span1 = document.createElement('span1')
    span1.textContent = numeroProduto
    span1.className = 'bg-blue-100 px-8 px-2'

    lista1.appendChild(span1)



    const lista2 = document.getElementById('pt')
    const produtoNome = document.getElementById('produtoNome')

    const span2 = document.createElement('span2')
    span2.textContent = produtoNome.value
    span2.className = 'bg-blue-100 px-8 px-2'

    lista2.appendChild(span2)



    const lista3 = document.getElementById('quant')
    const quantidadeProduto = document.getElementById('quantidadeProduto')

    const span3 = document.createElement('span3')
    span3.textContent = quantidadeProduto.value
    span3.className = 'bg-blue-100 px-8 px-2'

    lista3.appendChild(span3)
}