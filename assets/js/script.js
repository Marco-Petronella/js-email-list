/* Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
*/

//Creo una funzione che usando l'api di boolean prende una e-mail
const emailApi = "https://flynn.boolean.careers/exercises/api/random/mail";

//prendo il contenitore unordered list all'interno della pagina
const listContainer = document.querySelector("ul");

//creo una funzione che tutte le volte necessarie scriva nella lista le e-mail
//uso una funzione in virtù del bonus così potro richiamarlo più volte con il bottone ed eventualmente anche variare il numero di e-mail
//la creazione dell'elemento LI lo metterò in un'altra funzione a parte ancora per dividere i compiti nelle funzioni

function addEmail(num) {}
function addLiElement(email) {
  const liElement = document.createElement("li");
  liElement.innerHTML = email;
  listContainer.appendChild(liElement);
}
getEmail(2);

function getEmail(num) {
  for (let i = 0; i < num; i++) {
    fetch(emailApi)
      .then((response) => response.json())
      .then((emailData) => {
        const email = emailData.response;
        addLiElement(email);
      });
  }
}
