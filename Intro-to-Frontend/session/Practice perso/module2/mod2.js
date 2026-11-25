const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/355",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/356",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

const liste = document.createElement("ul");

for (let i = 0; i < podcasts.length; i++) {
  const podcast = podcasts[i];
  const li = document.createElement("li");
  const titre = document.createElement("h1");
  titre.innerHTML = podcast.name;
  if (podcast.imageUrl) {
    const image = document.createElement("img");
    image.src = podcast.imageUrl;
    li.appendChild(image);
  }
  li.appendChild(titre);
  liste.appendChild(li);
}
document.body.appendChild(liste);

function insertImage(imageUrl, elementToAppendImageTo) {
  const image = document.createElement("img");
  image.src = imageUrl;
  elementToAppendImageTo.appendChild(image);
}
insertImage("https://picsum.photos/536/354", document.querySelector("body"));
