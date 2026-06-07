const btnNo = document.getElementById("no");

const btnSi = document.getElementById("si");

const final = document.getElementById("final");

let tamaño = 1;

const mensajes = [

"¿Segura? 🥺",

"Mi corazón se rompe 💔",

"Inténtalo otra vez 😅",

"No puedes escapar 😂",

"Vamos, di que sí ❤️"

];

btnNo.addEventListener("click", ()=>{

let x = Math.random() * 500 - 250;

let y = Math.random() * 300 - 150;

btnNo.style.transform =
`translate(${x}px,${y}px)`;

tamaño += 0.2;

btnSi.style.transform =
`scale(${tamaño})`;

btnNo.innerText =
mensajes[
Math.floor(
Math.random()*mensajes.length
)
];

});

btnSi.addEventListener("click", ()=>{

document.querySelector(".container")
.style.display="none";

final.style.display="block";

});

const musica =
document.getElementById("musica");

document.body.addEventListener(
"click",
()=>{
    musica.play();
},
{ once:true }
);