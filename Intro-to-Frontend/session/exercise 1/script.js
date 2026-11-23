// 1. Créer un tableau (array) de chaînes de caractères (strings)
const favouriteDishes = [
  "Djoloff Rice",
  "Garba Attieke",
  "Foutou Sauce Graine",
];

// 2. Sélectionner l'élément <ul> dans le DOM
const dishesList = document.getElementById("dishes");

// 3. Boucler sur chaque élément du tableau
for (let i = 0; i < favouriteDishes.length; i++) {
  const dish = favouriteDishes[i];

  // Créer un nouvel élément <li>
  const li = document.createElement("li");

  // Définir le texte du <li> avec le nom du plat
  li.textContent = dish;

  // Ajouter le <li> à l'intérieur du <ul>
  dishesList.append(li);
}
