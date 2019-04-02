function checkFirstName() {
	let firstNamePattern = /^[A-Za-z]{2,20}$/;
	let firstNameValue = document.getElementById("firstName").value;
    return ( !!firstNameValue.match(firstNamePattern));
}


function checkLastName() {
	let lastNamePattern = /^[A-Za-z]{2,20}$/;
	let lastNameValue = document.getElementById("lastName").value;
	return ( !!lastNameValue.match(lastNamePattern));
}


function checkUsername() {
	let usernamePattern = /^[0-9a-zA-Z]{2,10}$/;
	let usernameValue = document.getElementById("username").value;
	return(!!usernameValue.match(usernamePattern));
}


function checkPassword() {
	let passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
	let passwordValue = document.getElementById("password").value;
    return(!!passwordValue.match(passwordPattern));
}


function checkYearOfBirth() {
    let date = document.getElementById("yearOfBirth").value;
    return  (!!(Number(date) > new Date().getFullYear() - 90  &&  date <  new Date().getFullYear() - 10) );
}


function checkPasswordConfirm() {
   let passwordValue = String(document.getElementById("password").value);
   let passwordConfirmValue = String(document.getElementById("passwordConfirm").value);
   return (!!(passwordConfirmValue === passwordValue));
}


function checkFormValidation() {

	if ( checkFirstName() && checkLastName() && checkUsername() && checkPassword() && checkPasswordConfirm() && checkYearOfBirth()) {
		document.getElementById("main-form").style.display = "none";
		let congrats = document.createElement("div");
		let firstName = document.getElementById("firstName").value;
		let lastName = document.getElementById("lastName").value;
		congrats.innerHTML = `Congrats ${firstName} ${lastName}`;
		congrats.className = "congrats";
		document.getElementById("body").appendChild(congrats);
	}

	checkFirstName() ? document.getElementById("firstNameError").style.display = "none" :
                       document.getElementById("firstNameError").style.display = "block";

	checkLastName() ? document.getElementById("lastNameError").style.display = "none" :
                      document.getElementById("lastNameError").style.display = "block";

	checkYearOfBirth() ? document.getElementById("yearOfBirthError").style.display = "none" :
                  document.getElementById("yearOfBirthError").style.display = "block";

	checkUsername() ? document.getElementById("usernameError").style.display = "none" :
                      document.getElementById("usernameError").style.display = "block";


	checkPassword() ? document.getElementById("passwordError").style.display = "none":
                      document.getElementById("passwordError").style.display = "block";

	checkPasswordConfirm() ? document.getElementById("passwordConfirmError").style.display = "none":
                             document.getElementById("passwordConfirmError").style.display = "block";

}

