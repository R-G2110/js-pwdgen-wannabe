/*Consegna:
Chiedere all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/ 

/*Passaggi:
1. Salvare in 3 variabili il prompt dell'inserimento del nome, cognome e colore preferito.

2. Effettuare un controllo della stringa se è vuota oppure se contiene lo spazio, e dare un messaggio di errore.

3. Creare la stringa di output, trasformare la stringa in minuscolo ed effettuare un controllo degli spazi vuoti e toglierli.

4. effettuare l'innerHTML dell'output nel tag designato. */




const firstName = prompt('Inserici il tuo nome');
if (firstName == " " || firstName == "  " || firstName.length <= 0) {
	txt = "Attenzione! inserisci il dato richiesto!";
} else {
	const lastName = prompt('Inserici il tuo cognome');
	if (lastName == " " || lastName == "  " || lastName.length <= 0){
		txt = "Attenzione! inserisci il dato richiesto!";
	} else {
		const favColor = prompt('Inserici il tuo colore preferito');
		if (favColor == " " || favColor == "  " || favColor.length <= 0){
			txt = "Attenzione! inserisci il dato richiesto!";
		} else{
			const generatedPassword = ` La password generato per te è: "${firstName.toLowerCase().trim().replace(" ","")}${lastName.toLowerCase().trim().replace(" ","")}${favColor.toLowerCase().trim().replace(" ","")}23"
			`
			document.getElementById("output").innerHTML = generatedPassword.replace(" ","");
		}
	}
}

document.getElementById("error").innerHTML = txt;