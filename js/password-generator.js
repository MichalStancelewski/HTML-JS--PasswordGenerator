function sendForm() {
	var numberOfCharsValue = document.querySelector("#numberOfChars").value;
	var includeNumbersValue = document.querySelector("#includeNumbers").checked;
	var includeSpecialValue = document.querySelector("#includeSpecial").checked;
	var howManyValue = document.querySelector("#howMany").value;
	
	var textarea = document.getElementById("outputArea");
	textarea.innerText = '';
	var message = document.getElementById("outputMessage");
	message.innerText = '';
	
	var output = '';
	
	if(numberOfCharsValue >= 6 && numberOfCharsValue <= 30 ){
		for (var i = 0; i < howManyValue; i++){ 
			output += generatePassword(numberOfCharsValue,includeNumbersValue,includeSpecialValue);
			output += '\n';
		}
		//textarea.value = output;
		textarea.innerText += output;
	} else if (numberOfCharsValue == '') {
		message.innerText += 'error: enter number of characters';
	} else if (numberOfCharsValue < 6) {
		message.innerText += 'error: password can not be shorter than 6 characters';
	} else if (numberOfCharsValue > 30) {
		message.innerText += 'error: password can not be longer than 30 characters';
	} else {
		message.innerText += 'error: something went wrong';
	}
}

function generatePassword(numberOfChars,includeNumbers,includeSpecial) {
	
	var results = '';
	var passwordValidation = false;
	var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
	var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var characters = lowerLetters + upperLetters;
	var numbers = '0123456789';
	var specials = '!%&#()+-/<=>?@[\]^_{|}~';
	
	if(includeNumbers) { characters += numbers };
	if(includeSpecial) { characters += specials };
	
	
	while (!passwordValidation) {
		for (var i = 0; i < numberOfChars; i++)	{
			results += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		if (includeNumbers && !(/[0-9]/.test(results))) {
			results	= '';		
		} else if (includeSpecial && !(/.*[!%&#()+-/<=>?@[\]^_{|}~].*/.test(results))) {
			results	= '';	
		} else if (!(/[a-z][A-Z]/.test(results))) {
			results	= '';	
		} else {
			passwordValidation = true;
		}
	}
	
	return results;
}