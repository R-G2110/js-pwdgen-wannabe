/*Consegna:
Chiedere all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
*/ 

/*Passaggi:
1. Salvare in 3 variabili il prompt dell'inserimento del nome, cognome e colore preferito.

2. Effettuare un controllo della stringa se è vuota o non contiene nessun carattere tranne lo spazio

3. Creare la stringa di output, trasformare la stringa in minuscolo ed effettuare un controllo degli spazi vuoti e toglierli.

4. effettuare l'innerHTML dell'output nel tag designato. */




const firstName = prompt('Inserici il tuo nome');
if (firstName.length <= 0 || firstName == null) {
	txt = "Attenzione! inserisci il dato richiesto!";
} else {
	const lastName = prompt('Inserici il tuo cognome');
	if (lastName.length <= 0 || lastName == null){
		txt = "Attenzione! inserisci il dato richiesto!";
	} else {
		const favColor = prompt('Inserici il tuo colore preferito');
		if (favColor.length <= 0 || favColor == null){
			txt = "Attenzione! inserisci il dato richiesto!";
		} else{
			const generatedPassword = `${firstName.toLowerCase().trim().replace(" ","")}${lastName.toLowerCase().trim().replace(" ","")}${favColor.toLowerCase().trim().replace(" ","")}23
			`
			document.getElementById("output").innerHTML = generatedPassword.replace(" ","");
		}
	}
}

document.getElementById("error").innerHTML = txt;