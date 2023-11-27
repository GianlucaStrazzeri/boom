//Pistas
 //Puedes usar `setTimeout()` para generar la asincronía de 5 segundos
 //Puedes usar `setInterval()` para generar la asincronía de 5 segundos (recuerda que es del 5 al 0, por tanto
 // el intervalo debería ser uno más) 5, 4, 3, 2, 1, 0 ...
 //Usa promesas para una vez pasado ese tiempo devuelva el resultado y puedas trabajar con él
 //Crea un botón de reinicio del juego voviendo a iniciar la función inicial o reiniciando la página al pulsarlo.

 //crear evento de JS, cuando el usuario entra en la pagina haz esto uilizando eventListener()
 //crear evento de JS, cuando el usuario suelta el teclado del dom haz esto eventListener()

 
 //Capturar todos los ids del Dom utilizando  document.getElementById()
//userInput: donde el usuario pone el numero del uno al 3
let userInput=document.getElementById("userInput");
//countdown: donde el ordenador creará una cuenta atrás de 5 segundos
const countdown=document.getElementById("countdown");
//result: donde el usuario recibe la respuesta de si ha salvado el mundo o ha explotado
const result=document.getElementById("result");
//restart: iniciar el juego
 const restart=document.getElementById("restart");

 //crear evento de JS, cuando el usuario entra en la pagina haz esto uilizando eventListener()
 userInput.addEventListener('click', function () {
    result.innerHTML = reverseCount;
    
  });

  //Defino una constante sin ponerle resultado para definirla con setTimeOut
  let reverseCount;
  let fraseResult;   

  const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        reverseCount = 5;
      resolve(reverseCount);
    }, 1000);
  });

  
  const promesa2 = new Promise((resolve) => {
    setTimeout(() => {
        reverseCount = 4;
      resolve(reverseCount);
    }, 2000);
  });

  const promesa3 = new Promise((resolve) => {
    setTimeout(() => {
        reverseCount = 3;
      resolve(reverseCount);
    }, 3000);
  });

  const promesa4 = new Promise((resolve) => {
    setTimeout(() => {
        reverseCount = 2;
      resolve(reverseCount);
    }, 4000);
  });

  const promesa5 = new Promise((resolve) => {
    setTimeout(() => {
        reverseCount = 1;
      resolve(reverseCount);
    }, 5000);
  });

  const promesa6 = new Promise((resolve) => {
    setTimeout(() => {
        reverseCount = 0;
      resolve(reverseCount);
    }, 6000);
  });

  const promesa7 = new Promise((resolve) => {
    setTimeout(() => {
      if (userInput == numberRandom1){
        console.log("<p>Te has salvado</p>");
       } else if (userInput != numberRandom1) {
         console.log("<p>vas a explotar capullín</p>");
       }
      resolve(fraseResult);
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
    countdown.innerHTML = "¿Explotarás?  O ¿Quedarás vivo?";
    return promesa7;
  });

  promesa7.then((reverseCount) => {
    result.innerHTML = fraseResult;
  });

  resolvePromesas();

  let numberRandom1; 
   numberRandom1=(Math.floor(Math.random() * 3)+1);
  console.log(numberRandom1);

  //function result(result, userInput, numberRandom1){
  //if (userInput == numberRandom1){
  // result.innerHTML("<p>Te has salvado</p>");
 // } else if (userInput != numberRandom1) {
 //   result.innerHTML("<p>vas a explotar capullín</p>");
 // }}
 //
 // result(result);

 

 
//
//IF ELSE FUNCIONANTE SI NO FUERA PORQUE TIENE QUE ESPERAR AL COUNTDOWN PARA FUNCIONAR
// if (userInput == numberRandom1){
//   console.log("<p>Te has salvado</p>");
 // } else if (userInput != numberRandom1) {
 //   console.log("<p>vas a explotar capullín</p>");
 // }
 // // 