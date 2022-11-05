
$("#tabla_1").click(function() { tabla(1); } )
$("#tabla_2").click(function() { tabla(2); } )
$("#tabla_3").click(function() { tabla(3); } )
$("#tabla_4").click(function() { tabla(4); } )
$("#tabla_5").click(function() { tabla(5); } )
$("#tabla_6").click(function() { tabla(6); } )

function tabla(param){
    console.log("param", param)
    $("#multiply").text("")
    array = [1,2,3,4,5,6,7,8,9,10]
    array.forEach(element => {
        // text = element + " * " + param + " = " + (element*param) + "<br>"
        text = `${element} * ${param} = ${element*param} </br>`
        $("#multiply").html($("#multiply").html() +text)
    });
}