/*Crée un tableau ressources contenant 3 objets (par exemple des cours, podcasts ou articles), chacun avec :
.titre (chaîne de caractères, obligatoire)
.description (chaîne de caractères, obligatoire)
.imageUrl (chaîne d'URL uniquement sur 2 des 3 objets ; laisse le 3e objet sans imageUrl)*/

const ressources = [
  {
    titre: "Maths pour les Nuls",
    description: "C'est un cours pour renforcer ses acquis en partant de zero",
    imageUrl: "https://picsum.photos/536/355",
  },
  {
    titre: "Maintenance",
    description: "passionne de maintenance ceci est pour vous",
    imageUrl: "https://picsum.photos/536/356",
  },
  {
    titre: "Anglais",
    description:
      "Parler anglais c'est se donner des chance de communiquer avec le monde entier",
  },
];
/*Crée une fonction réutilisable creerImage(imageUrl, parent) 
qui crée un <img>, lui assigne .src = imageUrl, lui donne une 
largeur raisonnable (ex. .style.width = "180px"), et l'ajoute à parent.*/

function creerImage(imageUrl, parent) {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.style.width = "180px";
  image.style.borderRadius = "4px";
  parent.appendChild(image);
}

/*Crée un élément <ul id="catalogue"></ul> (dans le HTML ou via JS), 
boucle sur ressources, crée pour chaque élément un <li> contenant un <h2> (titre),
un <p> (description), et appelle creerImage(ressource.imageUrl, li) uniquement si 
ressource.imageUrl existe.*/

// const liste = document.getElementById("catalogue");
const liste = document.createElement("ul");
liste.id = "catalogue";
liste.classList.add("catalogue");
for (let i = 0; i < ressources.length; i++) {
  const ressource = ressources[i];
  const li = document.createElement("li");
  li.classList.add("carte");
  const h2 = document.createElement("h2");
  h2.innerHTML = ressource.titre;
  const p = document.createElement("p");
  p.innerHTML = ressource.description;
  p.style.color = "#2a2a2a";
  if (ressource.imageUrl) {
    creerImage(ressource.imageUrl, li);
  }
  li.appendChild(h2);
  li.appendChild(p);
  liste.appendChild(li);
}

/*Ajoute chaque <li> au <ul>, puis ajoute le <ul> dans document.body*/
// const body = document.querySelector("body");
document.body.appendChild(liste);
const section = document.createElement("section");
section.id = "zone-bonus";
section.style.margin = "14px 0 14px  0";
section.classList.add("carte", "mise-en-avant");
document.body.appendChild(section);

//Ajout de style
const catalogue = document.getElementById("catalogue");
catalogue.style.listStyle = "none";
catalogue.style.padding = "0";
catalogue.style.margin = "0";
catalogue.style.display = "flex";
catalogue.style.flexDirection = "column";
catalogue.style.gap = "16px";

const cartes = document.querySelectorAll(".carte");
for (let i = 0; i < cartes.length; i++) {
  cartes[i].style.borderRadius = "10px";
  cartes[i].style.border = "2px solid #cbd5e1";
  cartes[i].style.color = "#ea5eab";
  cartes[i].style.padding = "16px";
  cartes[i].style.backgroundColor = "#f8fafc";
}

const miseEnAvant = document.querySelector(".mise-en-avant");
if (miseEnAvant) {
  miseEnAvant.style.backgroundColor = "#8365a7";
  miseEnAvant.style.color = "#ffffff";
}

/*Exercice pratique ciblé (Leçon 1)
Dans ton HTML, ajoute un bouton <button id="btn-compteur">Cliquer ici</button> et un paragraphe <p id="compteur-texte">Clics : 0</p>.
Dans ton JavaScript, sélectionne ces deux éléments avec document.querySelector.
Crée une variable let clics = 0; et ajoute un écouteur "click" sur le bouton qui incrémente clics (clics++) et met à jour 
compteurTexte.textContent (par exemple `Clics : ${clics}`). */

const bouton = document.createElement("button");
bouton.id = "btn-compteur";
bouton.innerHTML = "Cliquer ici";
document.body.appendChild(bouton);
const boutonSel = document.querySelector("#btn-compteur");
const p2 = document.createElement("p");
p2.id = "compteur-texte";
p2.innerHTML = "Clics: 0";
document.body.appendChild(p2);
const p2Sel = document.getElementById("compteur-texte");
let clics = 0;
boutonSel.addEventListener("click", () => {
  clics++;
  p2Sel.textContent = `Clics: ${clics}`;
});

/*Exercice pratique ciblé (Leçon 2)
On va rendre ta section#zone-bonus (ou une carte de ton choix) interactive :
Crée un bouton <button id="btn-toggle-bonus">Mettre en valeur / Réinitialiser</button>
(en HTML ou via document.createElement + document.body.appendChild(...)) 
et sélectionne-le avec document.querySelector("#btn-toggle-bonus").
Sélectionne ta section bonus avec document.querySelector("#zone-bonus").
Ajoute un écouteur "click" sur ce bouton qui :
utilise sectionBonus.classList.toggle("active") (ou une classe de ton choix),
et met à jour le texte du bouton ou d'un petit paragraphe d'état selon si 
la classe est active (sectionBonus.classList.contains("active")).*/

const btnToggle = document.createElement("button");
btnToggle.id = "btn-toggle-bonus";
btnToggle.textContent = "Mettre en valeur / Reinitialiser";
document.body.appendChild(btnToggle);
const btnToggleSel = document.querySelector("#btn-toggle-bonus");
btnToggle.addEventListener("click", () => {
  section.classList.toggle("active");
  if (section.classList.contains("active")) {
    btnToggle.textContent = "super !";
    section.style.outline = "3px solid #f4b4bd";
  } else {
    btnToggle.textContent = "Mettre en valeur / Reinitialiser";
    section.style.outline = "none";
  }
});
/*Exercice pratique ciblé (Leçon 3)
Ajoutons une interaction en temps réel avec un champ texte :
Crée un <input type="text" id="filtre-titre" placeholder="Tape un mot-clé..."> et un paragraphe <p id="resultat-filtre">Mot-clé : (aucun)</p>, puis ajoute-les à document.body.
Sélectionne-les avec document.querySelector.
Ajoute un écouteur "input" sur le champ : si input.value.trim() n'est pas vide, affiche `Mot-clé : ${input.value}` ; sinon, affiche "Mot-clé : (aucun)".*/

const input = document.createElement("input");
input.type = "text";
input.id = "filtre-titre";
input.placeholder = "Tape un mot-clé";
const p3 = document.createElement("p");
p3.id = "resultat-filtre";
p3.innerHTML = "Mot-clé : (aucun)";
document.body.appendChild(input);
document.body.appendChild(p3);

const inputSel = document.querySelector("#filtre-titre");
const p3Sel = document.querySelector("#resultat-filtre");

inputSel.addEventListener("input", () => {
  if (input.value.trim()) {
    p3Sel.textContent = `Mot-clé: ${input.value}`;
  } else {
    p3Sel.textContent = "Mot-clé : (aucun)";
  }
});
