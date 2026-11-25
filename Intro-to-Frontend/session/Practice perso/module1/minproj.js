/*Crée un élément <h1> avec le titre de ta carte (ex. "Mon Profil Frontend"), modifie son innerHTML et son style (color ou fontWeight).*/

const titre = document.createElement("h1");
titre.innerHTML = "Mon profil Frontend";
titre.style.color = "#f7b1db";
titre.style.fontWeight = "bold";

/*Crée un élément <img> avec document.createElement("img"), définis sa propriété .src vers une image (ex. "[https://picsum.photos/200](https://picsum.photos/200)"), et ajuste sa taille via .style.width (ex. "200px").*/

const image = document.createElement("img");
image.src = "https://picsum.photos/200";
image.style.width = "200px";

/*Crée un élément <p> décrivant ton objectif d'apprentissage avec .innerHTML et un style de fond (.style.backgroundColor) et d'espacement (.style.padding).*/

const paragraphe = document.createElement("p");
paragraphe.innerHTML =
  "Mon objectif: je souhaite devenir un developpeur full-stack.";
paragraphe.style.backgroundColor = "#e5e7eb";
paragraphe.style.padding = "4px";

/*Ajoute (appendChild) ces trois éléments à l'intérieur de ton conteneur principal*/

const conteneur = document.querySelector("main");
conteneur.appendChild(titre);
conteneur.appendChild(image);
conteneur.appendChild(paragraphe);
