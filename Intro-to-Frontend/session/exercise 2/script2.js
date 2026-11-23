const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

// 1. Fonction Image inserter
function appendImage(imageUrl, elementToAppendImageTo) {
  const img = document.createElement("img");
  img.src = imageUrl;
  elementToAppendImageTo.append(img);
}

// 2. Créer le <ul> et l'ajouter au <body>
const ul = document.createElement("ul");
document.body.append(ul);

// 3. Boucler sur chaque podcast
for (let i = 0; i < podcasts.length; i++) {
  const podcast = podcasts[i];

  // Créer le <li> et le <h1>
  const li = document.createElement("li");
  const h1 = document.createElement("h1");

  // Mettre le nom du podcast dans innerHTML et ajouter h1 dans li
  h1.innerHTML = podcast.name;
  li.append(h1);

  // Ajouter l'image seulement si imageUrl existe sur l'objet
  if (podcast.imageUrl) {
    appendImage(podcast.imageUrl, li);
  }

  // Ajouter le <li> complet dans le <ul>
  ul.append(li);
}
