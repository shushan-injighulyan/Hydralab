function checkName() {
	let letters = /^[A-Za-z]+$/;
	let nameValue = document.getElementById("inputName").value;
	if(nameValue.match(letters)) { 
      return true;
    } else {
      return false;
    }
}

function checkSurname() {
	let letters = /^[A-Za-z]+$/;
	let surnameValue = document.getElementById("inputSurname").value;
	if(surnameValue.match(letters)) {   
      return true;
    } else {
      return false;
    }
}




function checkLogin() {
	let letters = /^[0-9a-zA-Z]+$/;
	let loginValue = document.getElementById("inputLogin").value;
	if(loginValue.match(letters)) {
      return true;
    } else {
      return false;
      
    }
}


function checkPassword() {
	let letters = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
	let passwordValue = document.getElementById("inputPassword").value;
	if(passwordValue.match(letters)) {
 
      return true;
    } else {
      return false;
    }

m
}



function checkDateFormat() {
	let letters = /(?=.*\d)(?=.*[/]).{10}/;
	let dateValue1 = document.getElementById("inputDate").value;
	if(dateValue1.match(letters) && dateValue1.indexOf("/") ===2 && dateValue1.lastIndexOf("/")===5 ) {
 
     checkDate();
    } else {
      return false;
  
    }


}


function checkDate() {
let date = document.getElementById("inputDate").value.split("/");
let day = Number(date[0]), month =  Number(date[1]), year =  Number(date[2]);
if(year > 2012) {
return false;
} else if ( day > 31 || month > 12  || year < 1900 || ( ( month === 4 ||  month === 6 ||  month === 9 ||  month === 11) && day ===31 ) 
 ||  ( month ===2 && year %4 === 0 &&  day > 29)  || ( month === 2 && year % 4 !== 0 &&  day > 28) ) {

return false;
} else {
return true;
}



}





function checkPasswordConfirm() {
   let passwordValue = String(document.getElementById("inputPassword").value);
   let passConfirm = String(document.getElementById("inputPasswordConfirm").value);
   if (passConfirm === passwordValue) {
   	return true;
   } else {
   	return false;
   }
}

function myFunction() {

	if ( checkName() && checkSurname() && checkLogin() && checkPassword() && checkPasswordConfirm() && checkDateFormat()) {
		document.getElementById("main-form").style.visibility = "hidden";
		let congrats = document.createElement("div");
		congrats.innerHTML = "Congrats";
		document.getElementById("body").appendChild(congrats);

	} else if (!checkName()) {
		alert ("Plase enter valid Name")
    } else if (!checkSurname()) {
		alert ("Plase enter valid Surname")
    } else if (!checkLogin()) {
		alert ("Plase enter valid Login")
    } else if (!checkPassword()) {
		alert ("Plase enter valid Password")
    } else if (!checkPasswordConfirm()) {
		alert ("Yor password doesn't match")
    }  else if (!checkDateFormat()) {
		alert ("Plase enter correct date (ex. 01/01/2000)") 
    } 
}

