console.log("JavaScript cargado");

const TOTAL_PREGUNTAS = 26;
//tiempo del juego
//const TIEMPO_DEL_JUEGO = 60;

//estructura para almacenar las preguntas
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
    respuesta:"evento"
  },
  {
    id:"E",
	  pista: "Empieza por E",
    pregunta:"Acción que ocurre en el navegador o en un elemento HTML, como un clic, y que puede ser capturada y gestionada con JavaScript.",
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
    pregunta:"Tipo de dato que puede tener solo dos valores: true o false, utilizado en condiciones y comparaciones lógicas.",
    respuesta:"boolean"
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
    pregunta:"Elemento HTML que define una lista no ordenada, usualmente representada por viñetas.",
    respuesta:"visibility"
  },
  {
    id:"W",
	pista: "Empieza por ",
    pregunta:"Propiedad de CSS utilizada para establecer el ancho de un elemento.",
    respuesta:"width"
  },
  {
    id:"X",
	pista: "Empieza por X",
    pregunta:"Asociación de empresas tecnológicas de Castellón.",
    respuesta:"Xarxatec"
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

//preguntas contestadas. 0 es no contestada, 1 es contestada ya sea acierto o fallo
var preguntasResueltas = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var totalAciertos = 0;

//número de pregunta actual
var numPreguntaActual = -1;

//COMENTO TODO ESTO PORQUE NO SÉ SI QUERREMOS TIEMPO O NO AL FINAL
// Obtener el elemento del cronómetro
//const timer = document.getElementById("tiempo");
// Establecer el tiempo inicial en 60 segundos
/*let timeLeft = TIEMPO_DEL_JUEGO;
var countdown;*/

function mostrarPregunta() {
  console.log(numPreguntaActual)// Incrementar el número de la pregunta actual
  numPreguntaActual++;
  
  // Si llegamos al final de las preguntas, volvemos al inicio
  if (numPreguntaActual >= TOTAL_PREGUNTAS) {
    numPreguntaActual = 0;
  }

  // Si quedan preguntas sin contestar
  if (preguntasResueltas.includes(0)) {
    // Buscar la siguiente pregunta no respondida
    while (preguntasResueltas[numPreguntaActual] === 1) {
      numPreguntaActual++;
      if (numPreguntaActual >= TOTAL_PREGUNTAS) {
        numPreguntaActual = 0;
      }
    }

    // Cargar la pregunta actual en la interfaz
    document.getElementById("pista").textContent = palabras[numPreguntaActual].pista;
    document.getElementById("pregunta").textContent = palabras[numPreguntaActual].pregunta;
    console.log(palabras[numPreguntaActual].pista, palabras[numPreguntaActual].pregunta);


    // Actualizar el círculo con la pregunta actual
    const letra = palabras[numPreguntaActual].id;
    document.querySelector(`#${letra}`).classList.add("letra-actual");
    console.log(document.querySelector(`#${letra}`)); // Deberías ver el elemento correcto en la consola


  } else {
    // Si no quedan preguntas sin responder, redirigir a index3.html
    window.location = "index3.html"; 
  }
}
mostrarPregunta(); // Para iniciar el juego y mostrar la primera pregunta

//Función para mostrar las preguntas
/*function mostrarPregunta() {
	numPreguntaActual++;
  
	// Si llegamos al final de las preguntas, volvemos al inicio
	if (numPreguntaActual >= TOTAL_PREGUNTAS) {
	  numPreguntaActual = 0;
	}
  
	// Si quedan preguntas sin contestar
	if (preguntasResueltas.includes(0)) {
	  // Buscar la siguiente pregunta no respondida
	  while (preguntasResueltas[numPreguntaActual] === 1) {
		numPreguntaActual++;
		if (numPreguntaActual >= TOTAL_PREGUNTAS) {
		  numPreguntaActual = 0;
		}
	  }
  
	  // Cargar la pregunta actual en la interfaz
	  document.getElementById("pista").textContent = palabras[numPreguntaActual].pista;
	  document.getElementById("pregunta").textContent = palabras[numPreguntaActual].pregunta;
  
	  // Actualizar el círculo con la pregunta actual
	  const letra = palabras[numPreguntaActual].id;
	  document.getElementById(letra).classList.add("letra-actual");
  
	} else {
	  // Si no quedan preguntas sin responder, redirigir a index3.html
	  window.location = "index3.html"; 
	  //CREO QUE PUEDE ESTAR BIEN HACER UN INDEX QUE DIGA FIN DEL JUEGO Y CUÁNTAS PREGUNTAS HAS ACERTADO Y CUÁNTAS HAS FALLADO Y YA DECIR QUE PUEDES VOLVER A JUGAR. ASÍ SÓLO HAY UN INDEX ESTRA
	}
  }*/


//detecto cada vez que hay un cambio de tecla en el input
var respuesta = document.getElementById("respuesta");

/*respuesta.addEventListener("keyup", function(e) {
  // Detecto si la tecla presionada es ENTER
  if (e.key === "Enter") {
    const respuestaUsuario = respuesta.value.trim().toLowerCase();
    console.log(respuestaUsuario); // Verifica la respuesta ingresada
    if (respuestaUsuario === "") {
      alert("Escribe una respuesta o Pasapalabra");
      return;
    }

    // Obtengo la respuesta ingresada y la proceso
    controlarRespuesta(respuestaUsuario);
  }
});*/

  // Obtener el botón de enviar
  var botonEnviar = document.getElementById("enviar");
  var inputRespuesta = document.getElementById("respuesta");

  // Listener para el botón "Enviar"
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

  // Listener para la tecla Enter en el input
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

//Función que controla la respuesta
function controlarRespuesta(respuestaUsuario) {
  //controlo si la respuesta es correcta
  if (respuestaUsuario == palabras[numPreguntaActual].respuesta) {
    totalAciertos++;

    //actualizo el estado de las pregunta actual a 1, indicando que ya está respondida
    preguntasResueltas[numPreguntaActual] = 1;
    var letra = palabras[numPreguntaActual].id;
    document.getElementById(letra).classList.remove("letra-actual");
    document.getElementById(letra).classList.add("acierto");

  } else {
    //actualizo el estado de las pregunta actual a 1, indicando que ya está respondida
    preguntasResueltas[numPreguntaActual] = 1;
    var letra = palabras[numPreguntaActual].id;
    document.getElementById(letra).classList.remove("letra-actual");
    document.getElementById(letra).classList.add("fallo");
  }
  respuesta.value = "";
  mostrarPregunta();
}

//botón para pasar de pregunta sin contestar
var pasaPalabra = document.getElementById("pasapalabra");
pasaPalabra.addEventListener("click", function(event) {
  var letra = palabras[numPreguntaActual].id;
  document.getElementById(letra).classList.remove("letra-actual");

  mostrarPregunta();
});

/*var pasaPalabra = document.getElementById("pasapalabra");
pasaPalabra.addEventListener("click", function(event) {
  var letra = palabras[numPreguntaActual].id;
  document.getElementById(letra).classList.remove("letra-actual");
  mostrarPregunta();
});*/


//DE MOMENTO COMENTO TODO ESTO POR SI LO USAMOS
// Crear la función que se encargará de actualizar el cronómetro cada segundo
/*function largarTiempo() {
  countdown = setInterval(() => {
    // Restar un segundo al tiempo restante
    timeLeft--;

    // Actualizar el texto del cronómetro con el tiempo restante
    timer.innerText = timeLeft;

    // Si el tiempo llega a 0, detener el cronómetro
    if (timeLeft < 0) {
      clearInterval(countdown);
      mostrarPantallaFinal();
    }
  }, 1000);
}*/

//ESTO TENDREMOS QUE MOSTRARLO EN EL HTML DE PANTALLA FINAL SI AL FINAL LO CAMBIAMOS. LO COMENTO DE MOMENTO
//muestro la pantalla final
/*function mostrarPantallaFinal() {
  document.getElementById("acertadas").textContent = totalAciertos;
  document.getElementById("score").textContent = (totalAciertos * 100) / TOTAL_PREGUNTAS + "% de acierto";
  document.getElementById("pantalla-juego").style.display = "none";
  document.getElementById("pantalla-final").style.display = "block";
}*/

//botón para volverAJugar el juego
var volverAJugar = document.getElementById("volverAJugar");
volverAJugar.addEventListener("click", function(event) {
  numPreguntaActual = -1;
  timeLeft = TIEMPO_DEL_JUEGO;
  timer.innerText = timeLeft;
  totalAciertos = 0;
  preguntasResueltas = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  // LO QUE HAN HECHO AQUÍ CREO QUE NO NOS SIRVE, PERO LOS OJOS NO ME VAN YA
  //quito las clases de los círculos
  var circulos = document.getElementsByClassName("circulo");
  for (i = 0; i < circulos.length; i++) {
    circulos[i].classList.remove("acierto");
    circulos[i].classList.remove("fallo");
  }

  //document.getElementById("pantalla-final").style.display = "none";
  //document.getElementById("pantalla-juego").style.display = "block";
  //largarTiempo();
  mostrarPregunta();
});

