const btnNo = document.getElementById("no");
const btnSi = document.getElementById("si");
const final = document.getElementById("final");
const musica = document.getElementById("musica");

let tamaño = 1;

const mensajes = [
    "¿Segura? 🥺",
    "Mi corazón se rompe 💔",
    "Inténtalo otra vez 😅",
    "No puedes escapar 😂",
    "Vamos, di que sí ❤️"
];

// Reproducir música al primer clic
document.body.addEventListener("click", () => {
    if (musica) {
        musica.play();
    }
}, { once: true });

// Botón NO se escapa y botón SÍ crece
btnNo.addEventListener("click", () => {

    let x = Math.random() * 500 - 250;
    let y = Math.random() * 300 - 150;

    btnNo.style.transform = `translate(${x}px, ${y}px)`;

    tamaño += 0.2;
    btnSi.style.transform = `scale(${tamaño})`;

    btnNo.innerText = mensajes[
        Math.floor(Math.random() * mensajes.length)
    ];
});

// Botón SÍ muestra mensaje final
btnSi.addEventListener("click", () => {

    document.querySelector(".container").style.display = "none";
    final.style.display = "block";

});

// Corazones flotantes premium
setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (Math.random() * 80 + 15) + "px";
    heart.style.opacity = Math.random();
    heart.style.zIndex = "1";
    heart.style.pointerEvents = "none";

    const colores = [
        "#ff1493",
        "#ff69b4",
        "#ff0000",
        "#ff80ab",
        "#ffffff"
    ];

    heart.style.color = colores[
        Math.floor(Math.random() * colores.length)
    ];

    document.body.appendChild(heart);

    let pos = 100;

    const anim = setInterval(() => {

        pos--;
        heart.style.top = pos + "vh";

        if (pos < -10) {
            clearInterval(anim);
            heart.remove();
        }

    }, 20);

}, 250);