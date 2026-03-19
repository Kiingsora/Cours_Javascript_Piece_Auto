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

  export function ajoutListenerEnvoyerAvis(){  
    const formulaire = document.querySelector(".formulaire-avis");    
    formulaire.addEventListener("submit", function (event){
      event.preventDefault();

      const avis = {
        pieceId : parseInt(event.taarget.querySelector("[name=piece-id").value),
        utilisateur : event.target.querySelector("[name =utilisateur]").valeur,
        commentaire : event.target.querySelector("[name=commentaire]").valeur
      }
     
    });
  }