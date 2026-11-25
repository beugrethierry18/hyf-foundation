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
section.classList.add("carte", "mise-en-avant");
document.body.appendChild(section);

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
