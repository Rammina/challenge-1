// document Objects

// Homepage objects

let homepage = {
	emailInput: document.querySelector(".signup__text-input"),
	emailInputText: document.querySelector(".signup__text-input").value,
	emailInputTwo: document.querySelector(".signup__text-input-2"),
	emailInputTextTwo: document.querySelector(".signup__text-input-2").value,
	signUp: document.querySelector("#signup-submit"),
	signUpTwo: document.querySelector("#signup-submit-2"),
	
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

function validateSignUp(inputbox, submitbutton) {
	if(inputbox.matches(':invalid')) {
		submitbutton.classList.add("deny");

	}
	else if(inputbox.matches(':valid')) {
		submitbutton.classList.remove("deny");

	}

}



validateSignUp(homepage.emailInput, homepage.signUp);
validateSignUp(homepage.emailInputTwo, homepage.signUpTwo);

homepage.emailInput.addEventListener("focus", function(){
	validateSignUp(homepage.emailInput, homepage.signUp);
});

homepage.emailInput.addEventListener("blur", function(){
	validateSignUp(homepage.emailInput, homepage.signUp);
});

homepage.signUp.addEventListener("mouseover", function(){
	validateSignUp(homepage.emailInput, homepage.signUp);
});


homepage.emailInputTwo.addEventListener("focus", function(){
	validateSignUp(homepage.emailInputTwo, homepage.signUpTwo);
});

homepage.emailInputTwo.addEventListener("blur", function(){
	validateSignUp(homepage.emailInputTwo, homepage.signUpTwo);
});

homepage.signUpTwo.addEventListener("mouseover", function(){
	validateSignUp(homepage.emailInputTwo, homepage.signUpTwo);
});
