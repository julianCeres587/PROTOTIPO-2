const servicios = document.querySelectorAll('.servicio')
const flechaVolver = document.getElementById('flecha-volver')
const flechaAvanzar = document.getElementById('flecha-avanzar')
let servicioAtual = 0

flechaAvanzar.addEventListener('click', () => {
    if (servicioAtual === servicios.length - 1) {
        return
    }
    esconderServicioActual()
    servicioAtual++
    servicios[servicioAtual].classList.add('mostrar')
    opacidadFlechas()
})

flechaVolver.addEventListener('click', () => {
    if (servicioAtual === 0) {
        return
    }
    esconderServicioActual()
    servicioAtual--
    servicios[servicioAtual].classList.add('mostrar')
    opacidadFlechas()
})

function esconderServicioActual() {
    const servicioMostrado = document.querySelector('.mostrar')
    servicioMostrado.classList.remove('mostrar')
}

function opacidadFlechas() {
    const esPrimerServicio = servicioAtual === 0
    if (esPrimerServicio) {
        flechaVolver.classList.add('opacidad')
    } else {
        flechaVolver.classList.remove('opacidad')
    }

    const esUltimoServicio = servicioAtual === servicios.length - 1
    if (esUltimoServicio) {
        flechaAvanzar.classList.add('opacidad')
    } else {
        flechaAvanzar.classList.remove('opacidad')
    }
}