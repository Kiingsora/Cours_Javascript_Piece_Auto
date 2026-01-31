// VARIABLES

// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

// console.log(reponse);
console.log(pieces);

const article = pieces[0];
console.log(article);

const fiches = document.querySelector(".fiches");

const image = document.createElement("img");
const nomPiece = document.createElement("h2");
const prixArticle = document.createElement("p");
const categorie = document.createElement("p");


image.src = article.image;
nomPiece.innerText = article.nom;
prixArticle.innerText = ` Prix : ${article.prix}E `;
categorie.innerText = article.categorie;

fiches.appendChild(image)
fiches.appendChild(nomPiece)
fiches.appendChild(prixArticle)
fiches.appendChild(categorie)

// FONCTIONS

// EVENT
