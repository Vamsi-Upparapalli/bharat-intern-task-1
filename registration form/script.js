let goingIn = document.getElementById("goIn");
let emailwarn = document.getElementById("emailwarning");
let passwarn = document.getElementById("passwordwarning");
let loginE1 = document.getElementById("logincheck");
let passE1 = document.getElementById("passcheck");

goingIn.addEventListener("click", function(event) {
	if(loginE1.value == ""	) {
		emailwarn.textContent = "Enter Email";
	} else {
		emailwarn.textContent = "";
	}

	if(passE1.value == ""	) {
		passwarn.textContent = "Enter password";
	} else {
		passwarn.textContent = "";
	}

	if ((loginE1.value != "") && (passE1.value != "")) {
		passwarn.textContent = "Successfully logined";
		passwarn.style.color = "green";
	}


})

