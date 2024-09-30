console.log("JavaScript cargado");

const TOTAL_PREGUNTAS = 26;
const TIEMPO_DEL_JUEGO = 200;


const currentPage = window.location.pathname;
if (currentPage.includes("index2.html")) {
  tiempoJuego();
}

const palabras = [
  {
    id:"A",
	  pista: "Empieza por A",
	  pregunta:"Estructura de datos en JavaScript que permite almacenar y manipular una colección de elementos, como números o cadenas, en una sola variable.",
    respuesta:"array"
  },
  {
    id:"B",
	  pista: "Empieza por B",
    pregunta:"Parte de una página HTML donde se encuentra el contenido principal que se muestra en el navegador.",
    respuesta:"body"
  },
  {
    id:"C",
	  pista: "Empieza por C",
    pregunta:"Lenguaje utilizado para dar estilo y diseño a las páginas web, controlando la presentación de elementos HTML.",
    respuesta:"css"
  },
  {
    id:"D",
	  pista: "Empieza por D",
    pregunta:"Etiqueta HTML que se usa para agrupar contenido o elementos con el fin de organizar mejor la estructura de la página.",
    respuesta:"div"
  },
  {
    id:"E",
	  pista: "Empieza por E",
    pregunta:"En castellano, acción que ocurre en el navegador o en un elemento HTML, como un clic, y que puede ser capturada y gestionada con JavaScript.",
    respuesta:"evento"
  },
  {
    id:"F",
	  pista: "Contiene la F",
    pregunta:"Propiedad de CSS que se utiliza para posicionar un elemento en relación con el borde izquierdo de su contenedor cuando se usa position relativo, absoluto o fijo.",
    respuesta:"left"
  },
  {
    id:"G",
	  pista: "Empieza por G",
    pregunta:"Sistema en CSS que permite organizar elementos en filas y columnas, creando estructuras de diseño flexibles.",
    respuesta:"grid"
  },
  {
    id:"H",
	  pista: "Empieza por H",
    pregunta:"Parte del documento HTML donde se incluyen metadatos, como el título de la página o enlaces a archivos CSS y JavaScript.",
    respuesta:"head"
  },
  {
    id:"I",
	  pista: "Empieza por I",
    pregunta:"Atributo HTML que asigna un identificador único a un elemento, útil para manipularlo con JavaScript o CSS.",
    respuesta:"id"
  },
  {
    id:"J",
	  pista: "Empieza por J",
    pregunta:"Lenguaje de programación que permite hacer que las páginas web sean interactivas, respondiendo a acciones del usuario.",
    respuesta:"javascript"
  },
  {
    id:"K",
	  pista: "Empieza por K",
    pregunta:"Evento de JavaScript que se activa cuando una tecla es presionada en el teclado.",
    respuesta:"keydown"
  },
  {
    id:"L",
	  pista: "Contiene la L ",
    pregunta:"En castellano, tipo de dato que puede tener solo dos valores: true o false, utilizado en condiciones y comparaciones lógicas.",
    respuesta:"buleano"
  },
  {
    id:"M",
	  pista: "Empieza por M",
    pregunta:"Propiedad en CSS que define el espacio exterior alrededor de un elemento, separándolo de otros.",
    respuesta:"margin"
  },
  {
    id:"N",
	  pista: "Empieza por N",
    pregunta:"Objeto global en JavaScript que representa un valor vacío o inexistente.",
    respuesta:"null"
  },
  {
    id:"O",
	  pista: "Empieza por O",
    pregunta:"Propiedad de CSS que especifica cómo manejar el contenido que desborda el área de un elemento.",
    respuesta:"overflow"
  },
  {
    id:"P",
	  pista: "Empieza por P",
    pregunta:"Propiedad de CSS utilizada para definir el espacio interior de un elemento, creando espacio entre el contenido y los bordes.",
    respuesta:"padding"
  },
  {
    id:"Q",
	  pista: "Empieza por Q",
    pregunta:"Copia exacta de un texto que se inserta en una publicación de contenido propio.",
    respuesta:"quote"
  },
  {
    id:"R",
	  pista: "Empieza por R",
    pregunta:"Método JavaScript se usa para redondear un número al entero más cercano.",
    respuesta:"round"
  },
  {
    id:"S",
	  pista: "Empieza por S",
    pregunta:"Propiedad CSS se usa para establecer la sombra de un texto.",
    respuesta:"shadow"
  },
  {
    id:"T",
	  pista: "Empieza por T",
    pregunta:"Atributo HTML utilizado en formularios para especificar el tipo de entrada que debe recibir un campo, como texto, contraseña, correo, etc.",
    respuesta:"type"
  },
  {
    id:"U",
	  pista: "Empieza por U",
    pregunta:"Elemento HTML que define una lista no ordenada, usualmente representada por viñetas.",
    respuesta:"ul"
  },
  {
    id:"V",
	  pista: "Empieza por V",
    pregunta:"Propiedad de CSS que define si un elemento es visible u oculto, permitiendo su espacio en la página.",
    respuesta:"visibility"
  },
  {
    id:"W",
	  pista: "Empieza por W ",
    pregunta:"Propiedad de CSS utilizada para establecer el ancho de un elemento.",
    respuesta:"width"
  },
  {
    id:"X",
	  pista: "Empieza por X",
    pregunta:"Asociación de empresas tecnológicas de Castellón.",
    respuesta:"xarxatec"
  },
  {
    id:"Y",
	  pista: "Contiene la Y",
    pregunta:"Un superset de JavaScript que añade tipos estáticos al lenguaje. Permite detectar errores de tipo en tiempo de desarrollo y proporciona herramientas de autocompletado más avanzadas en editores de código.",
    respuesta:"typescript"
  },
  {
    id:"Z",
	  pista: "Contiene la Z",
    pregunta:"Lugar donde se desarrolla la formación de Xarxatec Activa.",
    respuesta:"puzzle"
  },
]

let preguntasResueltas = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let totalAciertos = 0;
let numPreguntaActual = -1;


const timer = document.getElementById("tiempo");

let tiempoRestante = TIEMPO_DEL_JUEGO;
var cuantaAtras;


function mostrarPregunta() {
  console.log(totalAciertos);
  numPreguntaActual++;
  
  if (numPreguntaActual >= TOTAL_PREGUNTAS) {
    numPreguntaActual = 0;
  }

  if (totalAciertos === TOTAL_PREGUNTAS) {
    window.location = "index3.html"; 
    return; 
  }

  if (!preguntasResueltas.includes(0)) {
    window.location = "index4.html";
    return; 
  }


  if (preguntasResueltas.includes(0)) {
    while (preguntasResueltas[numPreguntaActual] === 1) {
      numPreguntaActual++;
      if (numPreguntaActual >= TOTAL_PREGUNTAS) {
        numPreguntaActual = 0;
      }
    }

    document.getElementById("pista").textContent = palabras[numPreguntaActual].pista;
    document.getElementById("pregunta").textContent = palabras[numPreguntaActual].pregunta;
    console.log(palabras[numPreguntaActual].pista, palabras[numPreguntaActual].pregunta);

    const letra = palabras[numPreguntaActual].id;
    document.querySelector(`#${letra}`).classList.add("letra-actual");
  }
}
mostrarPregunta();


let respuesta = document.getElementById("respuesta");

var botonEnviar = document.getElementById("enviar");
var inputRespuesta = document.getElementById("respuesta");

botonEnviar.addEventListener("click", function() {
    const respuestaUsuario = inputRespuesta.value.trim().toLowerCase();
    console.log("entro la función de enviar")
    if (respuestaUsuario === "") {
        alert("Escribe una respuesta o Pasapalabra");
        return;
    }
    console.log(respuestaUsuario)
    controlarRespuesta(respuestaUsuario);

});

inputRespuesta.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        const respuestaUsuario = inputRespuesta.value.trim().toLowerCase();
        if (respuestaUsuario === "") {
            alert("Escribe una respuesta o Pasapalabra");
            return;
        }
        controlarRespuesta(respuestaUsuario);
    }
});


function controlarRespuesta(respuestaUsuario) {

  if (respuestaUsuario == palabras[numPreguntaActual].respuesta) {
    totalAciertos++;

    preguntasResueltas[numPreguntaActual] = 1;
    var letra = palabras[numPreguntaActual].id;
    document.getElementById(letra).classList.remove("letra-actual");
    document.getElementById(letra).classList.add("acierto");

  } else {
    preguntasResueltas[numPreguntaActual] = 1;
    var letra = palabras[numPreguntaActual].id;
    document.getElementById(letra).classList.remove("letra-actual");
    document.getElementById(letra).classList.add("fallo");
  }
  respuesta.value = "";
  mostrarPregunta();
}


let pasaPalabra = document.getElementById("pasapalabra");
pasaPalabra.addEventListener("click", function(event) {
  let letra = palabras[numPreguntaActual].id;
  document.getElementById(letra).classList.remove("letra-actual");

  mostrarPregunta();
});


function tiempoJuego() {
    cuantaAtras = setInterval(() => {
    tiempoRestante--;
    timer.innerText = tiempoRestante;
    if (tiempoRestante <= 0) {
      clearInterval(cuantaAtras);
      window.location = "index4.html";
    }
  }, 1000);
}


var volverAJugar = document.getElementById("volverAJugar");
volverAJugar.addEventListener("click", function(event) {
  numPreguntaActual = -1;
  tiempoRestante = TIEMPO_DEL_JUEGO;
  timer.innerText = tiempoRestante;
  totalAciertos = 0;
  preguntasResueltas = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  var circulos = document.getElementsByClassName("circulo");
  for (i = 0; i < circulos.length; i++) {
    circulos[i].classList.remove("acierto");
    circulos[i].classList.remove("fallo");
  }
  tiempoJuego();
  mostrarPregunta();
});