
document.getElementById("n_teorico").addEventListener("change", calcularTodo); 
document.getElementById("n_practico").addEventListener("change", calcularTodo); 
document.getElementById("n_laboratorio").addEventListener("change", calcularTodo); 
document.getElementById("n_examen").addEventListener("change", calcularTodo); 

document.getElementById("examen-1").addEventListener("change", calcularTodo); 
document.getElementById("examen-2").addEventListener("change", calcularTodo); 
document.getElementById("examen-3").addEventListener("change", calcularTodo); 
document.getElementById("quices").addEventListener("change", calcularTodo); 
document.getElementById("asistencia").addEventListener("change", calcularTodo); 
document.getElementById("Proyecto_Final").addEventListener("change", calcularTodo); 


function Notal_final(){
    n_teorico = parseInt(document.getElementById('n_teorico').value);
    n_practico = parseInt(document.getElementById('n_practico').value);
    nota_final = ((n_teorico * 80) / 100) +  ((n_practico * 20) / 100)
    contenido = document.getElementById('resultado_final')
    contenido.innerHTML = nota_final; 

    addClassByValue(document.getElementById('n_teorico'))
    addClassByValue(document.getElementById('n_practico'))
    addClassByValue(contenido)

}

function Notal_laboratorio(){
    n_teorico = parseInt(document.getElementById('n_laboratorio').value);
    n_practico = parseInt(document.getElementById('n_examen').value);
    nota_final = ((n_teorico * 80) / 100) +  ((n_practico * 20) / 100)
    contenido = document.getElementById('resultado_laboratorio')
    contenido.innerHTML = nota_final; 

    nota = document.getElementById('resultado_laboratorio').textContent
    document.getElementById('n_practico').value = nota


    addClassByValue(document.getElementById('n_laboratorio'))
    addClassByValue(document.getElementById('n_examen'))
    addClassByValue(contenido)

}

function Notal_teorica(){
    
    examen_1 = document.getElementById("examen-1")
    examen_2 = document.getElementById("examen-2")
    examen_3 = document.getElementById("examen-3")
    quices = document.getElementById("quices")
    asistencia = document.getElementById("asistencia")
    Proyecto_Final = document.getElementById("Proyecto_Final")

    total = (examen_1.value * 0.2 + examen_2.value * 0.2 + examen_3.value * 0.2 + quices.value * 0.1 +asistencia.value * 0.1 + Proyecto_Final.value * 0.2 )
    document.getElementById('n_teorico').value = total

    addClassByValue(examen_1)
    addClassByValue(examen_2)
    addClassByValue(examen_3)
    addClassByValue(quices)
    addClassByValue(asistencia)
    addClassByValue(Proyecto_Final)
}

function calcularTodo(){
    console.log('voy a calcular todo')
    Notal_laboratorio()
    Notal_teorica()
    Notal_final()
}

function addClassByValue_v1(element) {
    let value = 0
    if (element.tagName == 'INPUT') {
        value = element.value
    } else {
        value = element.textContent
    }

    if (value > 5) {
        value = 5
        if (element.tagName == 'INPUT') {
            element.value = value
        } else {
            element.textContent = value
        }
    }
    let class_remove = ''
    let class_add = ''

    if (value >= 3 && value <= 5) {
        if (element.tagName == 'INPUT') {
            class_remove = 'is-invalid'
            class_add = 'is-valid'
        } else {

            class_remove = 'good'
            class_add = 'bad'
        }
    } else {
        if (element.tagName == 'INPUT') {

            class_remove = 'is-valid'
            class_add = 'is-invalid'
        } else {
            class_remove = 'bad'
            class_add = 'good'
        }
    }

    element.classList.remove(class_remove)
    element.classList.add(class_add)
}

function addClassByValue(element) {
    if (element.tagName == 'INPUT') {
        validarColorNotaInput(element)
    } else {
        validarColorNota(element)
    }
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