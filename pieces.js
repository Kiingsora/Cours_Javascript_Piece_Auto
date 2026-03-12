import { ajoutListenersAvis } from "./avis.js";
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

function genererPiece(pieces) {
  for (let i = 0; i < pieces.length; i++) {
    const fiches = document.querySelector(".fiches");
    let baliseArticle = document.createElement("article");
    let image = document.createElement("img");
    let nomPiece = document.createElement("h2");
    let prixArticle = document.createElement("p");
    let categorie = document.createElement("p");
    let description = document.createElement("p");
    let disponible = document.createElement("p");
    let btnAvis = document.createElement("button");
    btnAvis.innerText = "avis";

    image.src = pieces[i].image;
    nomPiece.innerText = pieces[i].nom;

    prixArticle.innerText = ` Prix : ${pieces[i].prix}€ (${
      pieces[i].prix < 35 ? "€" : "€€€"
    }) `;

    categorie.innerText = pieces[i].categorie ?? "(aucune catégorie)";

    description.innerText = `${
      pieces[i].description ?? "Pas de description pour le moment."
    }`;

    disponible.innerText = `${
      pieces[i].disponible ? "En stock" : "Rupture de stock"
    }`;

    fiches.appendChild(baliseArticle);
    baliseArticle.appendChild(image);
    baliseArticle.appendChild(nomPiece);
    baliseArticle.appendChild(prixArticle);
    baliseArticle.appendChild(categorie);
    baliseArticle.appendChild(description);
    baliseArticle.appendChild(disponible);
    baliseArticle.appendChild(btnAvis);
  }
}

genererPiece(articles);
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
  const pieceDescription = pieces.filter((piece) => "description" in piece);
  console.log(pieceDescription);

  return pieceDescription;
});

const nomArticles = pieces.map((piece) => piece.nom);

for (let i = pieces.length - 1; i >= 0; i--) {
  if (pieces[i].prix > 35) {
    nomArticles.splice(i, 1);
  }
}

const listeElementAbordable = document.createElement("ul");
for (let i = 0; i < nomArticles.length; i++) {
  const piece = document.createElement("li");
  piece.innerText = nomArticles[i];
  listeElementAbordable.appendChild(piece);
}

const listeDomAbordable = document
  .querySelector(".abordables")
  .appendChild(listeElementAbordable);

const arrayTest = Array.from(pieces);
let categorie = arrayTest.map((pice) => pice.categorie);

// document.body.innerHTML = '<article> '+ categorie[2] +' </article>' + '<p>'+ categorie[1] +'</p>' + categorie[0] +'<span><span>'

const inputPrixMax = document.querySelector("#prix-max");
inputPrixMax.addEventListener("input", function () {
  const piecesFiltrees = articles.filter(function (article) {
    return article.prix <= inputPrixMax.value;
  });
  document.querySelector(".fiches").innerHTML = "";
  genererPiece(piecesFiltrees);
});

ajoutListenersAvis();
