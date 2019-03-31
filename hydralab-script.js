function checkFirstName() {
	let firstNamePattern = /^[A-Za-z]+$/;
	let firstNameValue = document.getElementById("firstName").value;
    return ( !!firstNameValue.match(firstNamePattern));
}


function checkLastName() {
	let lastNamePattern = /^[A-Za-z]+$/;
	let lastNameValue = document.getElementById("lastName").value;
	return ( !!lastNameValue.match(lastNamePattern));
}


function checkUsername() {
	let usernamePattern = /^[0-9a-zA-Z]+$/;
	let usernameValue = document.getElementById("username").value;
	return(!!usernameValue.match(usernamePattern));
}


function checkPassword() {
	let passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
	let passwordValue = document.getElementById("password").value;
    return(!!passwordValue.match(passwordPattern));
}


function checkDate() {
    let date = document.getElementById("yearOfBirth").value;
    return  (!!(Number(date) > new Date().getFullYear() - 90  &&  date <  new Date().getFullYear() - 10) );
}


function checkPasswordConfirm() {
   let passwordValue = String(document.getElementById("password").value);
   let passwordConfirmValue = String(document.getElementById("passwordConfirm").value);
   return (!!(passwordConfirmValue === passwordValue));
}


function checkFormValidation() {

	if ( checkFirstName() && checkLastName() && checkUsername() && checkPassword() && checkPasswordConfirm() && checkDate()) {
		document.getElementById("main-form").style.display = "none";
		let congrats = document.createElement("div");
		let name = document.getElementById("firstName").value;
		congrats.innerHTML = `Congrats ${name}`;
		congrats.className = "congrats";
		document.getElementById("body").appendChild(congrats);
	}

	if (!checkFirstName()) {
		document.getElementById("firstNameError").style.display = "block";
    }

    if (checkFirstName()) {
        document.getElementById("firstNameError").style.display = "none";
    }

	if (!checkLastName()) {
        document.getElementById("lastNameError").style.display = "block";
    }

    if (checkLastName()) {
        document.getElementById("lastNameError").style.display = "none";
    }

	if (!checkDate()) {
        document.getElementById("yearOfBirthError").style.display = "block";
    }

    if (checkDate()) {
        document.getElementById("yearOfBirthError").style.display = "none";
    }

	if (!checkUsername()) {
        document.getElementById("usernameError").style.display = "block";
    }

    if (checkUsername()) {
        document.getElementById("usernameError").style.display = "none";
    }

	if (!checkPassword()) {
        document.getElementById("passwordError").style.display = "block";
    }

	if (checkPassword()) {
        document.getElementById("passwordError").style.display = "none";
    }

	if (!checkPasswordConfirm()) {
        document.getElementById("passwordConfirmError").style.display = "block";
    }

    if (checkPasswordConfirm()) {
        document.getElementById("passwordConfirmError").style.display = "none";
    }

}

