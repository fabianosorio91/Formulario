
 function llenar(){
  var select = document.getElementById("año");
    for(i = 2020; i <= 2030; i++){
      var option = document.createElement("option");
      option.value = i;
      option.text = i;
      select.appendChild(option);
    }
    var meses = ["Enero", "Febrero", "Marzo", "Abril","Mayo", 
    "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    var select = document.getElementById("mes");
    for(i = 0; i <= 11; i++){
      var option = document.createElement("option");
      option.value = i;
      option.text = meses[i];
      select.appendChild(option);
    }
    var select = document.getElementById("dia");
    for(i = 1; i <= 31; i++){
      var option = document.createElement("option");
      option.value = i;
      option.text = i;
      select.appendChild(option);
    }   

    
  }


    function llenarDOc(){
      var docs = ["Cedula Ciudadania", "Tarjeta de identidad", "Pasaporte", "Otro"]
      var select = document.getElementById("llenarDocs");
      for(i = 0; i <= 3; i++){
        var option = document.createElement("option");
        option.value = i;
        option.text = llenarDOc[i];
        select.appendChild(option);
    }
   

    
 }



     
function llenarparrafos2(){
  var p0 = "Elemento ";

     var lista = document.getElementById("mparra2");
     for(i = 1; i <= 10; i++){
      var E1 = document.createElement("li");
      E1.innerHTML = p0;      
      lista.appendChild(E1);
    }
}

  
    
     function llenarDias(){
         Dias=["Lunes", "Martes", "Miercoles", "Jueves","Viernes","Sabado", "Domingo", "Ninguno"];        
        select = document.getElementById("diatexto");
        
        for(i = 0; i <= 7; i++){
          option = document.createElement("option");
          option.value = i;
          option.text = Dias[i];
          select.appendChild(option);
        }
        
     }

 
   