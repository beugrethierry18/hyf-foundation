const h1Element = document.getElementById("message-accueil");
h1Element.innerHTML = "My First Exercise";
const divElement = document.querySelector(".carte-statut");
divElement.innerHTML = "JavaScript est bien connecte au navigateur";
divElement.style.backgroundColor = "#b7c2db";
divElement.style.margin = "auto";
divElement.style.padding = "20px";

const p2Element = document.createElement("p");
p2Element.innerHTML = "j'applique createElement";
p2Element.style.fontWeight = "bold";
p2Element.style.color = "#f7b1db";
const conteneur = document.querySelector("body");
conteneur.appendChild(p2Element);
