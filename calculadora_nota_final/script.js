
document.getElementById("n_teorico").addEventListener("change", calcularTodo); 
document.getElementById("n_practico").addEventListener("change", calcularTodo); 
document.getElementById("n_laboratorio").addEventListener("change", calcularTodo); 
document.getElementById("n_examen").addEventListener("change", calcularTodo); 



function Notal_final(){
    n_teorico = parseInt(document.getElementById('n_teorico').value);
    n_practico = parseInt(document.getElementById('n_practico').value);
    nota_final = ((n_teorico * 80) / 100) +  ((n_practico * 20) / 100)
    contenido = document.getElementById('resultado_final')
    contenido.innerHTML = nota_final; 

    validarColorNotaInput(document.getElementById('n_teorico'))
    validarColorNotaInput(document.getElementById('n_practico'))
    validarColorNota(contenido)

}

function Notal_laboratorio(){
    n_teorico = parseInt(document.getElementById('n_laboratorio').value);
    n_practico = parseInt(document.getElementById('n_examen').value);
    nota_final = ((n_teorico * 80) / 100) +  ((n_practico * 20) / 100)
    contenido = document.getElementById('resultado_laboratorio')
    contenido.innerHTML = nota_final; 

    nota = document.getElementById('resultado_laboratorio').textContent
    document.getElementById('n_practico').value = nota


    validarColorNotaInput(document.getElementById('n_laboratorio'))
    validarColorNotaInput(document.getElementById('n_examen'))
    validarColorNota(contenido)

}


function calcularTodo(){
    console.log('voy a calcular todo')
    Notal_laboratorio()
    Notal_final()
}


function validarColorNota(element) {
    let value = element.textContent
    if (value > 5) {
        value = 5
        element.value = value
    }
    if (value >= 3 && value <= 5) {
        element.classList.remove('bad')
        element.classList.add('good')
    } else {
        element.classList.remove('good')
        element.classList.add('bad')
    }
}


function validarColorNotaInput(element) {
    let value = element.value
    if (value > 5) {
        value = 5
        element.value = value
    }
    if (value >= 3 && value <= 5) {
        element.classList.remove('is-invalid')
        element.classList.add('is-valid')
    } else {
        element.classList.remove('is-valid')
        element.classList.add('is-invalid')
    }
}