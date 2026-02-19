// VARIABLES
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

const article = pieces[0];

const articles = pieces;

for (let i = 0; i < articles.length; i++) {

  const fiches = document.querySelector(".fiches");
  let baliseArticle = document.createElement("article")
  let image = document.createElement("img");
  let nomPiece = document.createElement("h2");
  let prixArticle = document.createElement("p");
  let categorie = document.createElement("p");
  let description = document.createElement("p");
  let disponible = document.createElement("p");

  image.src = articles[i].image;
  nomPiece.innerText = articles[i].nom;

  prixArticle.innerText = ` Prix : ${articles[i].prix}€ (${
    articles[i].prix < 35 ? "€" : "€€€"
  }) `;

  categorie.innerText = articles[i].categorie ?? "(aucune catégorie)";

  description.innerText = `${
    articles[i].description ?? "Pas de description pour le moment."
  }`;

  disponible.innerText = `${
    articles[i].disponible ? "En stock" : "Rupture de stock"
  }`;

  fiches.appendChild(baliseArticle)
  baliseArticle.appendChild(image);
  baliseArticle.appendChild(nomPiece);
  baliseArticle.appendChild(prixArticle);
  baliseArticle.appendChild(categorie);
  baliseArticle.appendChild(description);
  baliseArticle.appendChild(disponible);
  console.log(fiches);
}


// FONCTIONS

// EVENT
