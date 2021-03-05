

function calculadora()
{  
    
    event.preventDefault();
    var num1 = document.getElementById("numero1");
    var num2 = document.getElementById("numero2");
    var select = document.getElementById("operaciones");

    if(select.options[select.selectedIndex].value == "+")
    {
        suma = Number(num1.value) + Number(num2.value);
        document.getElementById("resultado").value = suma;
    }
    else if(select.options[select.selectedIndex].value == "-")
    {
        suma = Number(num1.value) - Number(num2.value);
        document.getElementById("resultado").value = suma;
    }
    else if(select.options[select.selectedIndex].value == "/")
    {
        suma = Number(num1.value) / Number(num2.value);
        document.getElementById("resultado").value = suma;
    }
    else if(select.options[select.selectedIndex].value == "%")
    {
        suma = Number(num1.value) % Number(num2.value);
        document.getElementById("resultado").value = suma;
    }

    else if(select.options[select.selectedIndex].value == "*")
    {
        suma = Number(num1.value) * Number(num2.value);
        document.getElementById("resultado").value = suma;
    }

}

//Creando Nodos, sirve para por ejemplo al clickear un boton se va agregando contenido

var caja = document.createElement("div");
var contenido = document.createTextNode("Hola Mundo"); //aca creo el texto
caja.appendChild(contenido); //aca le incrustamos el contenido
caja.setAttribute("class", "caja");
var contenedor = document.getElementById("contenedor"); //accedo a contenedor
contenedor.appendChild(caja) //incrusto el elemento caja en el contenido



//---- modificacion la clase id de un elemento

// caja.id = "Primera"
// caja.className = "Cajuelilla"


// var padre = caja[0].parentNode; //obteniendo el elemento padre


// padre.insertBefore(caja, primeraCaja);