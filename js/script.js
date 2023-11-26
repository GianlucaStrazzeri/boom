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

  promesa1.then((reverseCount) => {
        result.innerHTML = reverseCount;
    return promesa2;
  });
  
  promesa2.then((reverseCount) => {
    result.innerHTML = reverseCount;
    return promesa3;
  });
  
  promesa3.then((reverseCount) => {
    result.innerHTML = reverseCount;
    return promesa4;
  });

  promesa4.then((reverseCount) => {
    result.innerHTML = reverseCount;
    return promesa5;
  });
  
  promesa5.then((reverseCount) => {
    result.innerHTML = reverseCount;
    return promesa6;
  });
  
  promesa6.then((reverseCount) => {
    result.innerHTML = "¿Explotarás?  O ¿Quedarás vivo?";
    return promesa1;
  });
