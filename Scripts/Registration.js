function confirmSubmit()
{	
	// Validate first and last name
	if(document.getElementById("First_Name").value.length == 0)
	{
		alert("Please enter your first name.");
		document.getElementById("First_Name").focus();
		return false;
	}
	if(document.getElementById("Last_Name").value.length == 0)
	{
		alert("Please enter your last name.");
		document.getElementById("Last_Name").focus();
		return false;
	}
	
	if(filterStringPattern(document.getElementById("First_Name").value, "") == false)
	{
	    alert("Please enter a valid first name.");
	    return false;
	}
	if (filterStringPattern(document.getElementById("Last_Name").value, "") == false)
	{
	    alert("Please enter a valid last name.");
	    return false;
	}

	if (straightStringPattern(document.getElementById("First_Name").value) == false)
	{
	    alert("Please enter a valid first name.");
	    return false;
	}
	if (straightStringPattern(document.getElementById("Last_Name").value) == false)
	{
	    alert("Please enter a valid last name.");
	    return false;
	}
	
	//Validate Email
	if (emailStringPattern(document.getElementById("User_Email").value) == false)
	{
	    alert("Please Enter a valid email address.");
	    return false;
	}
	
	
	// Check for valid e-mail
	/*
	theValue = document.getElementById("User_Email").value
	firstIndex = theValue.indexOf("@")
	secondIndex = theValue.indexOf("@",firstIndex + 1)
	if (secondIndex != -1)
	{	
		alert("Only one email address may be entered into the Email Address field. Please make changes.")
		document.getElementById("User_Email").focus()
		return false;
	}
	if (firstIndex == -1 || theValue.indexOf(".") == -1)
	{	
		alert("The email address you have entered is not valid. Please make corrections.")
		document.getElementById("User_Email").focus()
		return false;
	}	
	*/
	//********************************************************
	//improved email validation written on july 10 2007 by rmp
	//********************************************************
	theEmail = document.getElementById("User_Email").value;
	if(theEmail.length < 6)
	{
		alert("Please enter your e-mail.");
		document.getElementById("User_Email").focus();
		return false;
	}
	if (theEmail.indexOf("@") == -1)
	{
		alert("Please enter a valid e-mail.");
		document.getElementById("User_Email").focus();
		return false;
	}
	if (theEmail.indexOf(".") == -1) 
	{
		alert("Please enter a valid e-mail.");
		document.getElementById("User_Email").focus();
		return false;
	}
	if(theEmail.lastIndexOf(".") - theEmail.indexOf("@") <= 1 )
	{
		alert("Please enter a valid e-mail.");
		document.getElementById("User_Email").focus();
		return false;
	}
	if (theEmail.indexOf("@",(theEmail.indexOf("@")+1)) != -1)
	{
		alert("Please enter only ONE email address.");
		document.getElementById("User_Email").focus();
		return false;
	}

	if (theEmail.indexOf(";") != -1)
	{
		alert("There is an invalid character in your email address. Also note: Only one email address may be entered.");
		document.getElementById("User_Email").focus();
		return false;
	}
	if (theEmail.indexOf(",") != -1)
	{
		alert("There is an invalid character in your email address. Also note: Only one email address may be entered");
		document.getElementById("User_Email").focus();
		return false;
	}
	//**********End improved email validation*****************
	//********************************************************
	
	makeField('phone1','phone2','phone3','Phone_Number');
	
	//Validate Phone Number
	if(phoneStringPattern(document.getElementById("Phone_Number").value) == false)
	{
	    alert("Please enter a valid phone number.");
	    return false;
	}
	
	//Validate friends' names
	if (straightStringPattern(document.getElementById("Names_Of_Friends_Coming_With_Me").value) == false)
	{
	    alert("One or more of your friends' names are not valid.");
	    return false;
	}

	// ** Modified 9/23/09 - Add the Action location only after passing validation. - Joe + Freddy **
	document.getElementById("RSVP").action = "/server_controls/TechForumActivity.aspx";
	// ** End Modification **

	return true;
}

// This function is used to upload the forms values to the iframe
function uploadForm()
{
	document.getElementById("Submit").disabled = true;
	// call the validation function first
	if(confirmSubmit())
	{
		return true;
	}	
	else
	{  
		document.getElementById("Submit").disabled = false;
		return false; 
	}
}

// reroute to custom confirmation page
function GoToConfirmationPage()
{	
	document.getElementById("pageContent").innerHTML = "Your request has been received, thank you.";
}

function makeField(input1,input2,input3,output)
{
	var temp = "";
	temp = document.getElementById(input1).value + " - ";
	temp = temp + document.getElementById(input2).value;
	temp = temp + " - " + document.getElementById(input3).value;
	document.getElementById(output).value = temp;
}


alphaString = "|a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z| ";
numberString = "|1|2|3|4|5|6|7|8|9|0| ";
alphaArray = alphaString.split("|");
numericArray = numberString.split("|");

function frmFilter(accept, chars, predefined, elem, theEvent) 
{
	// accept is 0 (reject listed characters) or 1 (accept only listed characters)
	// Get the character code
	TheCharEvent = (navigator.appName == "Netscape") ? theEvent.which : theEvent.keyCode;
	// Ignore characters such as the shift key being pressed as it does not generate a visible character
	if (TheCharEvent == 9 || TheCharEvent == 20 || TheCharEvent == 16 || TheCharEvent == 8 || TheCharEvent == 46 || TheCharEvent == 32 || TheCharEvent == 17 || TheCharEvent == 18 || TheCharEvent == 0 || TheCharEvent == 1 || TheCharEvent == 2) 
	{ 
		return false; 
	}
	theValue = elem.value; // set the form element value into a variable
	theChar = theValue.substring((theValue.length - 1), (theValue.length)); // get the last character typed into the form element
	if (chars != "") 
	{
		filterChars = chars.split("|"); // separate the comma delimited list into an array
	}
	else 
	{ 
		filterChars = new Array(); 
	}
	if (predefined == "alpha") 
	{
		filterChars = filterChars.concat(alphaArray); // get predefined arrays
	}
	else if (predefined == "numeric") 
	{ 
		filterChars = filterChars.concat(numericArray); 
	}
	else if (predefined == "both") 
	{
		filterChars = filterChars.concat(alphaArray);
		filterChars = filterChars.concat(numericArray);
	}
	else if (predefined == "all") 
	{	
		return false; 
	}
	// be sure that the array has a value
	if (filterChars[1] == "") 
	{
		return false; // if it has no elements in it, end the function ; error
	}
	// if the form element has more than 0 characters in it
	if (theValue != "") 
	{
		// if we want to REJECT the chars in the 'chars' argument
		if (accept == 0) 
		{
			// cycle through the list of 'chars'
			for (i = 0;i < filterChars.length; i++) 
			{
				// check if the character in question matches any characters on the arguments list
				if (theChar == filterChars[i]) 
				{
					elem.select();
					alert("The \""+theChar+"\" character does not appear to be appropriate data for this form field.\nPlease double check to make sure the information you have entrered is correct."); // if it does match, alert the user
				}
			}
		}
		// if we want to ACCEPT only the chars in the 'chars' argument
		else if (accept == 1) 
		{
			acceptChars = false;
			for (i = 0; i < filterChars.length; i++) 
			{
				if (theChar == filterChars[i]) 
				{
					acceptChars = true;
					break;
				}
			}
			if (acceptChars == false) 
			{
				elem.select();
				alert("The \""+theChar+"\" character does not appear to be appropriate data for this form field.\nPlease double check to make sure the information you have entrered is correct."); // if it does match, alert the user
			}	
		}
	}
}

function target_changer(target, txt) 
{
	var current_swath = document.getElementById(target).value;
	if (current_swath.length > 0) 
	{
		current_swath = current_swath + ", " + txt;
	}
	else 
	{ 
		current_swath = txt;
	}
	document.getElementById(target).value = current_swath;
}

function email(elem) 
{
	theValue = elem.value;
	firstIndex = theValue.indexOf("@");
	secondIndex = theValue.indexOf("@", firstIndex + 1);
	if (secondIndex != -1) 
	{
		alert("Only one email address may be entered into the Email Address field. Please make changes.");
	}
	if (firstIndex == -1 || theValue.indexOf(".") == -1) 
	{
		alert("The email address you have entered is not valid. Please make corrections.");
	}
}

function filterStringPattern(dataField1, dataField2) 
{
    /* Returns false when the data being checked matches a word in the unwantedWords array or if data is not long enough */
    var result = true; var wPhrase1 = dataField1; var wPhrase2 = dataField2;
    wPhrase1 = stringRightClip(stringLeftClip(wPhrase1));
    wPhrase2 = stringRightClip(stringLeftClip(wPhrase2));
    if (wPhrase1.length > 0 && wPhrase2.length > 0) {
						     /* Two word evaluation */
						     var status1 = true; var status2 = true;
						     if (wPhrase1.length == 1 || wPhrase2.length == 1) { result = false; }
						     else {
						           status1 = filterDictionary(wPhrase1); status2 = filterDictionary(wPhrase2);
						           if (status1 == false || status2 == false) { result = false; }
						          }
						    }
    else {
          /* Single word evaluation */
          var sWord = "";
          if (wPhrase1.length > 0) { sWord = wPhrase1; } else { sWord = wPhrase2; }
          if (sWord.length == 1) { result = false; } else { result = filterDictionary(sWord); }
         }
    return result;
}

function filterDictionary(data) 
{
    /* Add undesired words here */
    var result = true;
    unwantedWords = new Array("bung", "hole", "muff", "penis", "vagina", "shit", "asshole");
    for (var FD = 0; FD < unwantedWords.length; FD++)
    {
        if (unwantedWords[FD].toLowerCase().indexOf(data.toLowerCase()) > -1) {
            result = false;
        }
    }
    return result;
}

function emailStringPattern(data) 
{
    /* Returns false if email string is invalid */
    var result = true;
    var accuratePattern = /^([a-zA-Z0-9])+([\.a-zA-Z0-9_-])*@([a-zA-Z0-9])+(\.[a-zA-Z0-9_-]+)+$/;
      if (!accuratePattern.test(data)) 
    {
        result = false; 
    }
    return result;
}


function phoneStringPattern(data)
 {
    /* Returns false if phone string has more than (), -, 0-9, + (for international numbers) */
    var result = true;
    var accuratePattern = /[a-zA-Z!@#\$%\^&\*_=\[\]\{\}|;:',.<>"\/?`~]/;
    if (accuratePattern.test(data.replace(/\+/g, "")) == true) {
        result = false;
    }
    return result;
}

function straightStringPattern(data) 
{
    /* Returns false if string has more than a-z, A-Z and whitespace */
    var result = true;
    var accuratePattern = /[0-9!@#\$%\^&\*\(\)_\-\+=\[\]\{\}|;:',.<>"\/?`~]/;
    if (accuratePattern.test(data) == true) {
        result = false;
    }
    return result;
}

function stringLeftClip(data) 
{
    /* Returns the string with all leading whitespace removed */
    var result = data.replace(/^\s+/, "");
    return result;
}

function stringRightClip(data) 
{
    /* Returns the string with all trailing whitespace removed */
    var result = data.replace(/\s+$/, "");
    return result;
}