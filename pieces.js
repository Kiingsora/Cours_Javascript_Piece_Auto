// VARIABLES
// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

const article = pieces[0];
const articles = pieces;

const btnCroissant = document.querySelector(".btn-trier");
const btnFiltrer = document.querySelector(".btn-filtrer");
const btnDecroissant = document.querySelector(".btn-decroissant");
const btnSansDescription = document.querySelector(".btn-sansDescription");
const btnDescription = document.querySelector(".btn-description");

for (let i = 0; i < articles.length; i++) {
  const fiches = document.querySelector(".fiches");
  let baliseArticle = document.createElement("article");
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

  fiches.appendChild(baliseArticle);
  baliseArticle.appendChild(image);
  baliseArticle.appendChild(nomPiece);
  baliseArticle.appendChild(prixArticle);
  baliseArticle.appendChild(categorie);
  baliseArticle.appendChild(description);
  baliseArticle.appendChild(disponible);
}

// FONCTIONS

// EVENT

btnCroissant.addEventListener("click", function () {
  const pieceOrdonees = Array.from(pieces);

  pieceOrdonees.sort(function (a, b) {
    return a.prix - b.prix;
  });

  console.log(pieceOrdonees);
});

btnDecroissant.addEventListener("click", function () {
  const pieceNonOrdonees = Array.from(pieces);

  pieceNonOrdonees.sort(function (a, b) {
    return b.prix - a.prix;
  });

  console.log(pieceNonOrdonees);
});

btnFiltrer.addEventListener("click", function () {
  const piecesFiltrees = pieces.filter(function (piece) {
    return piece.prix <= 35;
  });
  console.log(piecesFiltrees);
});

btnSansDescription.addEventListener("click", function () {
  const pieceSansDescription = pieces.filter(
    (piece) => !("description" in piece)
  );
  console.log(pieceSansDescription);

  return pieceSansDescription;
});

btnDescription.addEventListener("click", function () {

  const pieceDescription = pieces.filter((piece) => "description");
  console.log(pieceDescription);

  return pieceDescription;
});
