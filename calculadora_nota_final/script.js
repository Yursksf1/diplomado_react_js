document.getElementById("Total_nota").addEventListener("click", Notal_final); 

function Notal_final(){

    n_teorico = parseInt(document.getElementById('n_teorico').value);
    n_practico = parseInt(document.getElementById('n_practico').value);
    nota_final = ((n_teorico * 80) / 100) +  ((n_practico * 20) / 100)
    contenido = document.getElementById('resultado_final')
    contenido.innerHTML = ' ' + nota_final;
    
    }