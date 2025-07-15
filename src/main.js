import './style.css';

// Arrays para excusas profesionales y cómicas
let whoPro = ['Mi jefe', 'El equipo de IT', 'Recursos Humanos', 'El cliente'];
let actionPro = ['reinició', 'canceló', 'rechazó', 'pospusó'];
let whatPro = ['la reunión', 'el sistema', 'el proyecto', 'el informe'];
let whenPro = ['esta mañana', 'ayer en la tarde', 'durante el almuerzo', 'justo antes de la entrega'];

let whoFun = ['Mi perro', 'Mi abuela', 'El vecino', 'Un ovni'];
let actionFun = ['se comió', 'rompió', 'mojó', 'quemó'];
let whatFun = ['mi tarea', 'la llanta', 'el WiFi', 'el despertador'];
let whenFun = ['antes de clase', 'mientras dormía', 'durante la cena', 'cuando estaba saliendo'];

// Función generadora
function generateExcuse(type) {
  let who, action, what, when;

  if (type === "pro") {
    who = whoPro;
    action = actionPro;
    what = whatPro;
    when = whenPro;
  } else {
    who = whoFun;
    action = actionFun;
    what = whatFun;
    when = whenFun;
  }

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

// Inserta el HTML base y enlaza los botones al cargar la página
window.onload = () => {
  document.querySelector('#app').innerHTML = `
    <div class="container">
      <h1>Generador de Excusas</h1>
      <p id="excuse">Haz clic en un botón para generar una excusa</p>
      <button id="btnPro">Excusa profesional</button>
      <button id="btnFun">Excusa cómica</button>
    </div>
  `;

  document.querySelector("#btnPro").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse("pro");
  });

  document.querySelector("#btnFun").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse("fun");
  });
};
