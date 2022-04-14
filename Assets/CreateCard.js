export function createCard() {

    // todo
    const CARTA = document.createElement('div')
    CARTA.className = 'CARTA'
        //top
    const CARTA_TOP = document.createElement('div')
    CARTA_TOP.className = 'CARTA-TOP'
    CARTA.appendChild(CARTA_TOP)


    const mountNode = document.querySelector("#app")
    mountNode.appendChild(CARTA)

    const imagen = document.createElement('img')
    imagen.src = './images/image-equilibrium.jpg'
    CARTA_TOP.appendChild(imagen)

    const VISTA = document.createElement('div')
    VISTA.className = 'VISTA'
    CARTA_TOP.appendChild(VISTA)

    const imagenvista = document.createElement('img')
    imagenvista.src = './images/icon-view.svg'
    VISTA.appendChild(imagenvista)



    //center
    const CARTA_BOTTON = document.createElement('div')
    CARTA_BOTTON .className = ' CARTA-BOTTON '
    CARTA.appendChild( CARTA_BOTTON )

    const  CARTA_BOTTON_PARRAFO = document.createElement('div')
    CARTA_BOTTON_PARRAFO.className = ' CARTA-BOTTON-PARRAFO'
    CARTA_BOTTON.appendChild( CARTA_BOTTON_PARRAFO)

    const CARTA_TOP1 = document.createElement('p')
    CARTA_TOP1.textContent = "Equilibrium #3429"
    CARTA_BOTTON_PARRAFO.appendChild(CARTA_TOP1)

    const CARTA_TOP2 = document.createElement('p')
    CARTA_TOP2.textContent = "Our Equilibrium collection promotes balance and calm."
    CARTA_BOTTON_PARRAFO.appendChild(CARTA_TOP2)

    const CARTA_BOTTON_TIEMPO = document.createElement('div')
    CARTA_BOTTON_TIEMPO.className = 'CARTA-BOTTON-TIEMPO'
    CARTA_BOTTON.appendChild(CARTA_BOTTON_TIEMPO)

    const LETRA1 = document.createElement('div')
    LETRA1.className = 'LETRA1'
    CARTA_BOTTON_TIEMPO.appendChild(LETRA1)

    const imagen3 = document.createElement('img')
    imagen3.src = './images/icon-ethereum.svg'
   LETRA1.appendChild(imagen3)

    const span = document.createElement('span')
    span.textContent = '0.041 ETH'
    LETRA1.appendChild(span)

    const LETRA2 = document.createElement('div')
    LETRA2.className = "LETRA2"
    CARTA_BOTTON_TIEMPO.appendChild(LETRA2)

    const imagen4 = document.createElement('img')
    imagen4.src = './images/icon-clock.svg'
    LETRA2.appendChild(imagen4)

    const span2 = document.createElement('span')
    span2.textContent = '3 days left'
    LETRA2.appendChild(span2)


    //bottom

    const CARTA_BOTTON_ABAJO = document.createElement('div')
    CARTA_BOTTON_ABAJO.className = 'CARTA-BOTTON-ABAJO'
    CARTA_BOTTON.appendChild(CARTA_BOTTON_ABAJO)

    const imagen5 = document.createElement('img')
    imagen5.src = './images/image-avatar.png'
    CARTA_BOTTON_ABAJO.appendChild(imagen5)

    const LETRAS = document.createElement('div')
    LETRAS.className = 'LETRAS'
    CARTA_BOTTON_ABAJO.appendChild(LETRAS)

    const span3 = document.createElement('span')
    span3.textContent = 'Creation of'
    LETRAS.appendChild(span3)

    const span4 = document.createElement('span')
    span4.textContent = 'Jule Wyvern'
    LETRAS.appendChild(span4)
  
}