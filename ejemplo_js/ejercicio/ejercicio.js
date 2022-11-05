
document.getElementById("tabla_1").addEventListener("click", function() { tabla(1); } )
document.getElementById("tabla_2").addEventListener("click", function() { tabla(2); } )
document.getElementById("tabla_3").addEventListener("click", function() { tabla(3); } )
document.getElementById("tabla_4").addEventListener("click", function() { tabla(4); } )
document.getElementById("tabla_5").addEventListener("click", function() { tabla(5); } )
document.getElementById("tabla_6").addEventListener("click", function() { tabla(6); } )

function tabla(param){
    document.getElementById("multiply").innerHTML = ""
    array = [1,2,3,4,5,6,7,8,9,10]
    array.forEach(element => {
        // text = element + " * " + param + " = " + (element*param) + "<br>"
        text = `${element} * ${param} = ${element*param} </br>`
        document.getElementById("multiply").innerHTML += text
    });
}