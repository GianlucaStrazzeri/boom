 //Capturar todos los ids del Dom utilizando  document.getElementById()
//userInput: espacio donde el usuario pone el numero del 1 al 3
let userInput=document.getElementById("userInput");
//countdown: espacio donde el ordenador creará una cuenta atrás de 5 segundos
const countdown=document.getElementById("countdown");
//result: espacio donde el usuario recibe la respuesta de si ha salvado el mundo o ha explotado
const result=document.getElementById("result");
//restart: botón para reiniciar el juego
 const restart=document.getElementById("restart");
 //crear evento de JS, cuando el usuario entra en la pagina pinta una cuenta hacía atrás
 // uilizando eventListener() y innerHTML
 userInput.addEventListener('click', function () {
    countdown.innerHTML = reverseCount;
  });

  //Defino una constante que se refiere al Countdown sin definirla 
  let reverseCount;
 //Defino una constante que se refiere al resultado de la explosión sin definirla 
  let espacioDeVidaOMuerte= "Espacio de  vida o muerte";
  let salvación= "Te has salvado cabronazo";
  let muerte= "Has explotado"

  //Creo 6 promesas que definen el varlor de la variable reversecount
  const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        reverseCount = "Cuenta atrás: 5";
      resolve(reverseCount);
    }, 1000);
  });
  
  const promesa2 = new Promise((resolve) => {
    setTimeout(() => {
        reverseCount = "Cuenta atrás: 4";
      resolve(reverseCount);
    }, 2000);
  });
  const promesa3 = new Promise((resolve) => {
    setTimeout(() => {
        reverseCount = "Cuenta atrás: 3";
      resolve(reverseCount);
    }, 3000);
  });
  const promesa4 = new Promise((resolve) => {
    setTimeout(() => {
        reverseCount = "Cuenta atrás: 2";
      resolve(reverseCount);
    }, 4000);
  });
  const promesa5 = new Promise((resolve) => {
    setTimeout(() => {
        reverseCount = "Cuenta atrás: 1";
      resolve(reverseCount);
    }, 5000);
  });
  const promesa6 = new Promise((resolve) => {
    setTimeout(() => {
        reverseCount = "Cuenta atrás: 0, Explotarás?????";
      resolve(reverseCount);
    }, 6000);
  });


//Defino esta promesa 7 comn un if else para si es verdadero imprimir en la pantalla te has salvado
//sino vas a explotar
  const promesa7 = new Promise((resolve) => {
    setTimeout(() => {
      if (userInput == numberRandom1){
        espacioDeVidaOMuerte= salvación;
       } else if (userInput != numberRandom1) {
        espacioDeVidaOMuerte= muerte;
       }
      resolve(espacioDeVidaOMuerte);
    }, 7000);
  });

  function resolvePromesas(promesa){
    promesa1.then((reverseCount) => {
      countdown.innerHTML = reverseCount;
  return promesa2;
});

promesa2.then((reverseCount) => {
  countdown.innerHTML = reverseCount;
  return promesa3;
});

promesa3.then((reverseCount) => {
  countdown.innerHTML = reverseCount;
  return promesa4;
});

promesa4.then((reverseCount) => {
  countdown.innerHTML = reverseCount;
  return promesa5;
});

promesa5.then((reverseCount) => {
  countdown.innerHTML = reverseCount;
  return promesa6;
});

promesa6.then((reverseCount) => {
  countdown.innerHTML = reverseCount;
  return promesa7;
});

promesa7.then((fraseResult) => {
  result.innerHTML =  espacioDeVidaOMuerte;
});
}


  resolvePromesas();

  result.innerHTML= espacioDeVidaOMuerte;