// document Objects

// Homepage objects

let homepage = {
	emailInput: document.querySelector(".berry__text-input"),
	emailInputText: document.querySelector(".berry__text-input").value,
	emailClick: false,
	signUp: document.querySelector("#berry-submit"),
	signUpValid:  false


}

// Functions

// Functions that get rid of placeholders
// The first one restores the placeholder if the default value is not changed
function fillField(input,val) {
      if(input.value == "")
         input.value=val;
};

// The second one removes the placeholder when the input box is on focus
function clearField(input,val) {
      if(input.value == val)
         input.value="";
};

function validateSignUp() {
	if(homepage.emailInput.matches(':invalid')) {
		homepage.signUp.classList.add("deny");

	}
	else if(homepage.emailInput.matches(':valid')) {
		homepage.signUp.classList.remove("deny");

	}

}

validateSignUp();

homepage.emailInput.addEventListener("focus", function(){
	validateSignUp();
});

homepage.emailInput.addEventListener("blur", function(){
	validateSignUp();
});

homepage.signUp.addEventListener("mouseover", function(){
	validateSignUp();
});

