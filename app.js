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

function initSearch(people){
    alert("Welcome to Family Tree");
    do{
        var searchType = prompt("Do you want to search by name or other criteria? Enter the word 'name' or 'other criteria'.")
        }
    while(!(searchType=="name" || searchType == "other criteria"));
    switch (searchType){
        case "name":
            var person = findPerson(prompt("Enter person's first name."), prompt("Enter person's last name."), people);
            displayPerson(person.firstName, person.lastName)
            mainMenu(person, people);
            break;
        case "other criteria":
            criteriaSearch();
            break;
        default:
            alert("There was an error.");
            initSearch(people);
            //Fix the bug where this alert message does not pop up 
    }
}

function findPerson (firstName, lastName, people){
    if(!person){
        //should this be people?
        alert("Sorry! We could not find that individual.");
        return findPerson(firstName, lastName, people);
    }

    for(var i in people){
        if(people[i].firstName.toLowerCase() === firstName.toLowerCase() && people[i].lastName.toLowerCase() === lastName.toLowerCase()){
            alert(people[i].firstName + " " + people[i].lastName);
            return person;
        }
    }

}


function displayPerson (firstName, lastName){
    alert("Person:" + person.firstName+ " " + person.lastName);
}



function mainMenu (firstName, lastName, people, person) {

    if(!person){
        //should this be people?
        alert("Sorry! We could not find that individual.");
        return initSearch(people);
    }

    var displayOption = prompt( + person.firstName + " " + person.lastName + "Do you want to know their 'info', 'family', next of 'kin', or 'descendants'? Type the option you want or 'restart' or 'quit'.");

    switch(displayOption){
        case "info":

            break;

        case "family":


            break;

        case "kin":

            break;

        case "descendants":

            break;

        case "restart":
            initSearch(people)
            break;

        case "quit":
            return;
            break;


        default:
            return mainMenu(person,people);
    }


}


//Moved to the bottom until finished with Goals 1 and 2

function criteriaSearch(){

    alert("Please answer the following questions, if you do not know the answer please type Unknown")

    var personGender = prompt("What is the persons gender, male or female?")

    var personAge = prompt("How old is the person you are looking for?")

    var personAgeRange = prompt("What is the persons aprox. age? Example: 14-50")

    var personheight = prompt("What is the person's aprox height in inches? Ex. 71")

    var personWeight = prompt("How much does the person weigh? Please only put in the number format in lbs. Example: 175")

    var personOccupation = prompt("What is the persons occupation? Please only put in one word. Example: doctor")

    var personEyeColor = prompt("What is the persons eye color? Please only put in one word. Example: green")
    } 

/*function splitOne(){

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

    // once the search is done, pass the results to the responder function
    responder(result);
}

/*function getInfo(person,people){
//  alert("Person:" + person.firstName + " " + person.lastName);
//mainMenu(person,people);
}

function getPersonInfo(firstName, lastName){
    var result = "This will be the information for whoever you searched for";

    // return the object of a person
    return result;
}

function responder(results){
    // results may be a list of strings, an object, or a single string.
    alert(results);
}

function getFamily(){
    // return an array containing the members of the person's family
    // the array should contain each person's unmodified object
}
*/
