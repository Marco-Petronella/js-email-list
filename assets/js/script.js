
/* Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
*/

const emailApi = "https://flynn.boolean.careers/exercises/api/random/mail";
function getEmail() { fetch (emailApi) 
    .then(response => response.json())
    .then(emailData => {
        console.log(emailData);
        console.log(emailData.response);  
    })
}

