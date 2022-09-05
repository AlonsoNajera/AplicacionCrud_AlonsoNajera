
llenartabla();

function llenartabla(){
    var tbody=document.querySelector('#tblInfo tbody');

    tbody.innerHTML='';

    var 
        aid=JSON.parse(localStorage.getItem('aid_info')),
        anombre=JSON.parse(localStorage.getItem('anombreInput_info')),
        aapellido=JSON.parse(localStorage.getItem('aapellidoLocal_info')),
        aocupacion=JSON.parse(localStorage.getItem('aocupacionLocal_info')),
        asueldo=JSON.parse(localStorage.getItem('asueldoLocal_info'));

    var ncantidad=aid.length;

    for (var i=0; i<ncantidad;i++)
    {
        var fila=document.createElement('tr');

        var celdaid=document.createElement('td'),
            celdanom=document.createElement('td'),
            celdaape=document.createElement('td'),
            celdaocup=document.createElement('td'),
            celdasuel=document.createElement('td'),
            celdaModificar=document.createElement('td'),
            enlaceModificar=document.createElement('a');

           


   

        var  nodotextid=document.createTextNode(aid[i]),
        nodotextonom=document.createTextNode(anombre[i]),
        nodotextoape=document.createTextNode(aapellido[i]),
        nodotextoocup=document.createTextNode(aocupacion[i]),
        nodotextosueldo=document.createTextNode(asueldo[i]),
        nodotextomodificar=document.createElement("button");

        nodotextomodificar.textContent="ELIMINAR";

        nodotextomodificar.addEventListener("click", () => deleteIndividual(fila
        ))

        celdaid.appendChild(nodotextid);
        celdanom.appendChild(nodotextonom);
        celdaape.appendChild(nodotextoape);
        celdaocup.appendChild(nodotextoocup);
        celdasuel.appendChild(nodotextosueldo);
        enlaceModificar.appendChild(nodotextomodificar);
        celdaModificar.appendChild(enlaceModificar);


       

        fila.appendChild(celdaid);
        fila.appendChild(celdanom);
        fila.appendChild(celdaape);
        fila.appendChild(celdaocup);
        fila.appendChild(celdasuel);
        fila.appendChild(celdaModificar);

        
        

tbody.appendChild(fila);


    }

}

function deleteIndividual(fila){
    console.log(fila);
   
    localStorage.setItem("fila", JSON.stringify('aid_info'));

}


