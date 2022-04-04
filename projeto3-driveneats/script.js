
let link = "https://wa.me/?text=" 
let total = 0

function toggleselecionadoPratos(escolhido) {
    let selecionado = document.querySelector(".Pratos .selecionado");
    if (selecionado !== null) {
        
        let iconselecionado = document.querySelector(".Pratos .selecionado ion-icon")  
        iconselecionado.classList.add("Invisivel")
        selecionado.classList.remove("selecionado");
     
    }
    escolhido.classList.add("selecionado");
    let selecionaricon = document.querySelector(".Pratos .selecionado ion-icon")
    selecionaricon.classList.remove("Invisivel")
}

function toggleselecionadoBebidas(escolhido) {
    let selecionado = document.querySelector(".Bebidas .selecionado");
    if (selecionado !== null) {

        let iconselecionado = document.querySelector(".Bebidas .selecionado ion-icon")  
        iconselecionado.classList.add("Invisivel")
        selecionado.classList.remove("selecionado");

    }
    escolhido.classList.add("selecionado");
    let selecionaricon = document.querySelector(".Bebidas .selecionado ion-icon")
    selecionaricon.classList.remove("Invisivel")
}

function toggleselecionadoSobremesas(escolhido) {
    let selecionado = document.querySelector(".Sobremesas .selecionado");
    if (selecionado !== null) {

        let iconselecionado = document.querySelector(".Sobremesas .selecionado ion-icon")  
        iconselecionado.classList.add("Invisivel")
        selecionado.classList.remove("selecionado");

    }
    escolhido.classList.add("selecionado");
    let selecionaricon = document.querySelector(".Sobremesas .selecionado ion-icon")
    selecionaricon.classList.remove("Invisivel")
}

function botaoFinalizar () {
    let checkPratos = document.querySelector(".Pratos .selecionado")
    let checkBebidas = document.querySelector(".Bebidas .selecionado")
    let checkSobremesas = document.querySelector(".Sobremesas .selecionado")
    let botaofinal = document.querySelector(".Bottom > div")

    if ( checkPratos !== null && checkBebidas !== null && checkSobremesas !== null) {

        botaofinal.classList.remove("TestoInferior")
        botaofinal.classList.add("Verde")
        

        let precoprato = Number(document.querySelector(".Pratos .selecionado .Invisivel ").innerHTML)
        let precobebida = Number(document.querySelector(".Bebidas .selecionado .Invisivel ").innerHTML)
        let precosobremesa = Number(document.querySelector(".Sobremesas .selecionado .Invisivel").innerHTML)

        

        total = precoprato + precobebida + precosobremesa

        let prato = document.querySelector(".Pratos .selecionado h4").innerHTML
        let bebida = document.querySelector(".Bebidas .selecionado h4").innerHTML
        let sobremesa = document.querySelector(".Sobremesas .selecionado h4").innerHTML

       
        let mensagen = `Olá, gostaria de fazer o pedido:\n- Prato: ${prato} \n- Bebida: ${bebida} \n- Sobremesa: ${sobremesa} \n Total: R$ ${total.toFixed(2)} `

        mensagen = encodeURIComponent(mensagen)

        link = `https://wa.me/?text=${mensagen}`

    }
}

function abrirLink(){
    if (total !== 0){
        window.open(link, '_blank').focus();
    }
}


