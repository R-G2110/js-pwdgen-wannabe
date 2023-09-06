/*Consegna:
Chiedere all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/ 

/*Passaggi:
1. Salvare in 3 variabili il prompt dell'inserimento del nome, cognome e colore preferito.

2. Effettuare un controllo degli spazi vuoti e toglierli.

3. Creare la stringa di output.

4. effettuare l'innerHTML dell'output nel tag designato. */

//1.
const firstName = prompt('Inserici il tuo nome');
const lastName = prompt('Inserici il tuo cognome');
const favColor = prompt('Inserici il tuo colore preferito');

//2.


//3.
const generatedPassword = firstName.toLowerCase().trim().replace(" ","")+ lastName.toLowerCase().trim().replace(" ","") + favColor.toLowerCase().trim().replace(" ","") + 23;

//4.
document.getElementById('output').innerHTML = generatedPassword;