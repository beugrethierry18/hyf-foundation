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

function creerImage(imageUrl, parent) {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.style.width = "180px";
  image.style.borderRadius = "4px";
  parent.appendChild(image);
}

const catalogue = document.querySelector("#catalogue");
const zoneFiltres = document.querySelector("#zone-filtres");
const zoneActions = document.querySelector("#zone-actions");
const sectionBonus = document.querySelector("#zone-bonus");

// 1. Création des cartes à partir de `ressources`
for (let i = 0; i < ressources.length; i++) {
  const ressource = ressources[i];
  const li = document.createElement("li");
  li.classList.add("carte");

  const h2 = document.createElement("h2");
  h2.textContent = ressource.titre;

  const p = document.createElement("p");
  p.textContent = ressource.description;

  if (ressource.imageUrl) {
    creerImage(ressource.imageUrl, li);
  }

  li.appendChild(h2);
  li.appendChild(p);
  catalogue.appendChild(li);
}

// 2. Champ de filtrage et paragraphe de résultat
const inputFiltre = document.createElement("input");
inputFiltre.type = "text";
inputFiltre.id = "filtre-titre";
inputFiltre.placeholder = "Tape un mot-clé (ex. maths, anglais)...";

const resultatFiltre = document.createElement("p");
resultatFiltre.id = "resultat-filtre";
resultatFiltre.textContent = "Mot-clé : (aucun)";

zoneFiltres.appendChild(inputFiltre);
zoneFiltres.appendChild(resultatFiltre);

// 3. Bouton compteur et bouton bascule de la zone bonus
const btnCompteur = document.createElement("button");
btnCompteur.id = "btn-compteur";
btnCompteur.textContent = "Cliquer ici";

const texteCompteur = document.createElement("p");
texteCompteur.id = "compteur-texte";
texteCompteur.textContent = "Clics : 0";

const btnToggle = document.createElement("button");
btnToggle.id = "btn-toggle-bonus";
btnToggle.textContent = "Mettre en valeur / Réinitialiser";

zoneActions.appendChild(btnCompteur);
zoneActions.appendChild(texteCompteur);
zoneActions.appendChild(btnToggle);

let clics = 0;
btnCompteur.addEventListener("click", () => {
  clics++;
  texteCompteur.textContent = `Clics : ${clics}`;
});

btnToggle.addEventListener("click", () => {
  sectionBonus.classList.toggle("active");
  if (sectionBonus.classList.contains("active")) {
    btnToggle.textContent = "Super ! (Actif)";
  } else {
    btnToggle.textContent = "Mettre en valeur / Réinitialiser";
  }
});

// ==========================================
// À COMPLÉTER POUR LE MINI-PROJET MODULE 3 :
// ==========================================
// A. Récupère toutes les cartes du catalogue :
const cartesCatalogue = document.querySelectorAll("#catalogue li");
// B. Écoute l'événement "input" sur `inputFiltre` :
inputFiltre.addEventListener("input", () => {
  const recherche = inputFiltre.value.trim().toLocaleLowerCase();
  let visible = 0;
  for (let i = 0; i < cartesCatalogue.length; i++) {
    const titreCarte = cartesCatalogue[i]
      .querySelector("h2")
      .textContent.toLocaleLowerCase();

    if (titreCarte.includes(recherche)) {
      cartesCatalogue[i].style.display = "";
      visible++;
    } else {
      cartesCatalogue[i].style.display = "none";
    }
  }

  if (recherche) {
    resultatFiltre.textContent = `Mot-clé : "${inputFiltre.value.trim()}" — ${visible} ressource(s) affichée(s)`;
  } else {
    resultatFiltre.textContent = `Mot-clé : (aucun) — ${visible} ressource(s) affichée(s)`;
  }
});

for (let i = 0; i < cartesCatalogue.length; i++) {
  cartesCatalogue[i].addEventListener("click", () => {
    cartesCatalogue[i].classList.toggle("selectionnee");
  });
}
