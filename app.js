
/*  Remove this from your final submission
function printAllToConsole(dataObj){
	for (var key in dataObj) {
		if (dataObj.hasOwnProperty(key)) {
			console.log(key + " -> " + JSON.stringify(dataObj[key]));
		}
	}
}
printAllToConsole(data);
*/

function initSearch(){
    var yourName = prompt("Do you want to search by 'name' or 'other criteria'?");
    if(yourName === 'name'){
        splitOne();
    }

    else if (yourName === 'other criteria') {
        splitTwo();
    }

    else {
        alert("Wrong user input")
        initSearch();
    }
}

function splitOne(){

    // get all the information you need to run the search
    var name = prompt("Who do you want to search for, enter first name");

    if (firstName === " "){ 
        //need function to ask user to enter name from data to move on 
        lastName();
    }
    else{
        alert ("Wrong user input")
        splitOne();
    }



    // then pass that info to the respective function.
    var result = getPersonInfo("J", "T")

    // once the search is done, pass the results to the responder function
    responder(result);
}



function getPersonInfo(firstName, lastName){
    var result = "This will be the information for whoever you searched for";
    
    // return the object of a person
    return result;
}









function splitTwo(){
<<<<<<< HEAD

=======
<<<<<<< HEAD
    var personCriteria = prompt("Please answer the following questions to find who you want. What is the persons aprox. age? Ex. Between the ages of 14-50")
    var gender = prompt("What is the person's gender? Ex. 'male' or 'female'")
    var dob = prompt("What is the person's date of birth? Ex. 1/18/1949 or NA if unknown")
    var height = prompt("What is the person's aprox height in inches? Ex. 71")
    var weight = prompt("What is the person's aprox height in inches? Ex. 71")
    var eyeColor = prompt("What is the person's aprox height in inches? Ex. 71")
    var occupation = prompt("What is the person's aprox height in inches? Ex. 71")
=======
>>>>>>> 84ef011d74abdb732f02e31ec86f7531ef4fde5c
    
>>>>>>> d3372c94e51910170b77385a095291fe260fec22
    alert("Please answer the following questions, if you do not know the answer please type Unknown")

    var personGender = prompt("What is the persons gender, male or female?")

    var personAge = prompt("How old is the person you are looking for?")

    var personAgeRange = prompt("What is the persons aprox. age? Example: 14-50")

    var personheight = prompt("What is the person's aprox height in inches? Ex. 71")

    var personWeight = prompt("How much does the person weigh? Please only put in the number format in lbs. Example: 175")

    var personOccupation = prompt("What is the persons occupation? Please only put in one word. Example: doctor")

    var personEyeColor = prompt("What is the persons eye color? Please only put in one word. Example: green")
    }




function responder(results){
    // results may be a list of strings, an object, or a single string.
    alert(results);
}



function getFamily(){
    // return an array containing the members of the person's family
    // the array should contain each person's unmodified object
}

// there will be much more here, and some of the code above will certainly change
