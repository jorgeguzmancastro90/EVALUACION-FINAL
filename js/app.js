function encogerBoton(elementos){
      elementos.style.height = "62px"
      if (elementos.children[0]) {
     elementos.children[0].style.width = "inherit";
    }
}

function volverBoton(elementos){
     elementos.style.height = "62.91px"
}

function encogerBotonesArriba(elementos){
  elementos.style.height = "16.6%"
}

function VolverBotonesArriba (elementos){
  elementos.style.height = "62.91px"
}

function encogerMas(elementos){
  elementos.style.height = "99.5%"
}
function volverMas(elementos){
  elementos.style.height ="100%"
}



function addContenido() {
  var elementoWeb=document.getElementById("display");
  elementoWeb.innerHTML= 1;
  x="0"; //guardar número en pantalla
  xi=1; //iniciar número en pantalla: 1=si; 0=no;
  coma=0;
  function numero(xx) {  //recoge el número pulsado en el argumento.
           if (x=="0" || xi==1  ) {  // inicializar un número,
              elementoWeb.innerHTML=xx; //mostrar en pantalla
              x=xx; //guardar número;
              }
           else { //continuar un número
              elementoWeb.innerHTML+=xx; //añadimos y mostramos en pantalla.
              x+=xx; //añadimos y guardamos
              }
           xi=0 //el número está iniciado y podemos ampliarlo.
           }


}





var calculadora = {
  init: function(){
    // acá inicializaremos todas las funcionalidades que tiene la calculadora
    this.asignarEventosBotones(".row .col1 .tecla");
    this.asignarReducirTamañoTeclasArriba(".teclado img")
    this.asignarVolverBotonesArriba(".teclado img")
    this.asignarReducirTeclaMas(".row .col2 .tecla")
    this.asignarVolverBoton(".row .col1 .tecla");
    this.asignarVolverMas(".row .col2 .tecla");
    this.asignarEventoMostrarEnPantalla(".row .col1 .tecla")

  },
  asignarEventosBotones: function(selector){
      var botones = document.querySelectorAll(selector)
      for (var i = 0; i<botones.length; i++) {
      botones[i].onmousedown = this.eventoEncogerBoton
    }
  },
  eventoEncogerBoton: function(event){
    encogerBoton(event.target)
  },


  asignarReducirTamañoTeclasArriba: function(selector){
    var botones = document.querySelectorAll(selector)
    botones[0].onmousedown = this.eventoEncogerArriba
    botones[1].onmousedown = this.eventoEncogerArriba
    botones[2].onmousedown = this.eventoEncogerArriba
    botones[3].onmousedown = this.eventoEncogerArriba
    botones[4].onmousedown = this.eventoEncogerArriba
    botones[5].onmousedown = this.eventoEncogerArriba
    botones[6].onmousedown = this.eventoEncogerArriba
    botones[7].onmousedown = this.eventoEncogerArriba
    botones[8].onmousedown = this.eventoEncogerArriba
    botones[9].onmousedown = this.eventoEncogerArriba
    botones[10].onmousedown = this.eventoEncogerArriba
    botones[11].onmousedown = this.eventoEncogerArriba

  },

  asignarVolverBotonesArriba: function(selector){
    var botones = document.querySelectorAll(selector)
    botones[0].onmouseup = this.eventoVolverBotonesArriba
    botones[1].onmouseup = this.eventoVolverBotonesArriba
    botones[2].onmouseup = this.eventoVolverBotonesArriba
    botones[3].onmouseup = this.eventoVolverBotonesArriba
    botones[4].onmouseup = this.eventoVolverBotonesArriba
    botones[5].onmouseup = this.eventoVolverBotonesArriba
    botones[6].onmouseup = this.eventoVolverBotonesArriba
    botones[7].onmouseup = this.eventoVolverBotonesArriba
    botones[8].onmouseup = this.eventoVolverBotonesArriba
    botones[9].onmouseup = this.eventoVolverBotonesArriba
    botones[10].onmouseup = this.eventoVolverBotonesArriba
    botones[11].onmouseup = this.eventoVolverBotonesArriba
  },

  eventoVolverBotonesArriba: function (event){
    VolverBotonesArriba(event.target)
  },
  eventoEncogerArriba: function(event){
    encogerBotonesArriba(event.target)
  },

  asignarReducirTeclaMas: function (selector){
    var botones = document.querySelectorAll(selector)
    botones[0].onmousedown = this.eventoEncogerMas
  },
  eventoEncogerMas: function(event){
    encogerMas(event.target)
  },

  asignarVolverBoton: function(selector){
    var botones = document.querySelectorAll(selector)
    for (var i = 0; i<botones.length; i++) {
    botones[i].onmouseup = this.eventoVolverBoton
  }
},

  eventoVolverBoton: function(event){
    volverBoton(event.target)
},

asignarVolverMas: function(selector){
  var botones = document.querySelectorAll(selector)
  botones[0].onmouseup = this.eventoVolverMas
},

eventoVolverMas: function(event){
  volverMas(event.target)
},
eventoAddNum1: function(event){
  addContenido(event.target)
},
asignarEventoMostrarEnPantalla: function (selector){
  var teclas = document.querySelectorAll(selector)
    teclas[0].onclick = this.eventoAddNum1
    teclas[1].onclick = this.eventoAddNum2
  },

  eventoAddNum2: function(event){
    addContenido(event.target)
  },
}
calculadora.init();
