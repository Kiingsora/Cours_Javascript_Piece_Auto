export function ajoutListenersAvis() {
    const btnAvis = document.querySelectorAll(".fiches article button");
    for (let i = 0; i < btnAvis.length; i++) {
      btnAvis[i].addEventListener("click", async function (event) {
        
        const id = event.target.dataset.id;   
        const reponse = await fetch(`http://localhost:8081/pieces/${id}/avis`);
        const avis = await reponse.json();

        const avisElement = document.createElement("p");
        const piecesElements = event.target.parentElement;
        piecesElements.appendChild(avisElement);

        for (let i = 0; i < avis.length; i++) {
          avisElement.innerHTML += `${avis[i].utilisateur} : ${avis[i].commentaire} <br>`          
        }
      });
    }
  }
