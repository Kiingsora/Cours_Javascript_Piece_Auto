// VARIABLES

// reprendre à vérifier les données

// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

// console.log(reponse);
console.log(pieces);

const article = pieces[0];
console.log(article);

const articles = pieces;

const fiches = document.querySelector(".fiches");
articles.forEach((article) => {
  let image = document.createElement("img");
  let nomPiece = document.createElement("h2");
  let prixArticle = document.createElement("p");
  let categorie = document.createElement("p");
  let description = document.createElement("p");
  let disponible = document.createElement("p");

  image.src = article.image;
  nomPiece.innerText = article.nom;

  prixArticle.innerText = ` Prix : ${article.prix}€ (${
    article.prix < 35 ? "€" : "€€€"
  }) `;

  categorie.innerText = article.categorie ?? "(aucune catégorie)";

  description.innerText = `${article.description ?? "Pas de description pour le moment."
  }`;

  disponible.innerText = `${article.disponible ? "En stock": "Rupture de stock"}`
  fiches.appendChild(image);
  fiches.appendChild(nomPiece);
  fiches.appendChild(prixArticle);
  fiches.appendChild(categorie);
  fiches.appendChild(description);
  fiches.appendChild(disponible)
});

// FONCTIONS

// EVENT
