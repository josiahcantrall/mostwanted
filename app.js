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
    var searchType = prompt("Do you want to search by name or other criteria? Enter the word 'name' or 'other criteria'.")
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
            console.log("hello");
            alert("There was an error.");
            console.log("world");
            initSearch(people);
    }
}


function findPerson (firstName, lastName, people){


    var person = people.filter(function (el) {
        return el.firstName.toLowerCase() === firstName.toLowerCase() && el.lastName.toLowerCase() === lastName.toLowerCase()});

    if(!person.length > 0){
        alert("Sorry! We could not find that individual.");
        return initSearch(people);
    }
    return person[0]
}




function displayPerson (firstName, lastName)
{
    alert("Person:" + " " + firstName + " " + lastName);

}

function mainMenu (person, people) {

    if(!person){
        alert("Sorry! We could not find that individual.");
        return initSearch(people);
    }

    var displayOption = prompt( "You found" + " '" + person.firstName + " " + person.lastName + "', " + "do you want to know his/her 'info', 'family', next of 'kin', or 'descendants'? Type the option you want, 'restart' to start over or 'quit' to exit.");

    switch(displayOption){
        case "info":

            var personInfo = prompt ("Name:" + " " +person.firstName + " "+ person.lastName + "\n" + "Gender:" + " " + person.gender + "\n" + "Date of Birth:" + " " + person.dob + "\n" + "Height:" + " " + person.height + "\n" + "Weight:" + " " +  person.weight + "lbs\n" + "Eye Color:" + " " + person.eyeColor + "\n" + "Occupation:" + " " + person.occupation + "\n\nIf you wish to find out more info about," + " " + person.firstName + " " + person.lastName + ", please type 'back'. If you would like to find someone new, please type 'restart, or type 'quit' to quit.");

            switch (personInfo){
                case "back":
                    mainMenu(person, people);

                    break;

                case "restart":

                    initSearch(people);

                    break;

                case "quit":

                    return;

                    break;

                default:
                    alert("There was an error.");
                    mainMenu(person,people);             
            }

            break;

        case "family":
            
                    var personFamily = findPerson(alert("Parents:" + " " + person.parents+ "\n" + "Spouse:" + " " + person.currentSpouse));
            
            
            
            
                    mainMenu (person, people);
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


function findParents (people, person) {
    people.filter (function(getId){
       return person.parent === people.id 
    });
    return personfamily[0]
}

















//Moved to the bottom until finished with Goals 1 and 2

function criteriaSearch(){

    alert("Please answer the following questions, if you do not know the answer please leave blank")



    var personAge = prompt("How old is the person you are looking for?")
    /*searchPerson (pass in all attributes)

          if {(person enters age, store it, if no value entered move to next question);} if incorrect structure entered, alert user *if age is entered, skip over age range question*

          if {(person enters age range, store it, if no value entered move to next question);} if incorrect structure entered, alert user

           if {(person enters height, store it, if no value entered move to next question);} if incorrect structure entered, alert user

           if {(person enters weight, store it, if no value entered move to next question);} if incorrect structure entered, alert user

           if {(person enters occupation, store it, if no value entered move to next question);} if incorrect structure entered, alert user

           if {(person enters eye color, store it, if no value entered move to next question);} if incorrect structure entered, alert user

           call the function that filters all of the attributes
           
           return results back to user 

            prompt/ask user if they see the user they are looking for and have them type in name. If name not present ask user if they would like to restart. 

            if name present take to mainMenu



    function ageFinder(){
            //take in dob
            //take year that they were born in and subtract it from current year
            //return back to age function
    
    }

        */

    var personAgeRange = prompt("What is the persons aprox. age? Example: 14-50")





    var personheight = prompt("What is the person's height in inches? Ex. 71")





    var personWeight = prompt("How much does the person weigh? Please only put in the number format in lbs. Example: 175")





    var personOccupation = prompt("What is the persons occupation? Please only put in one word. Example: doctor")





    var personEyeColor = prompt("What is the persons eye color? Please only put in one word. Example: green")
    } 


/*function splitOne(){

    if (firstName === " "){ 
        //need function to ask user to enter name from data to move on 
        lastName();
    }
    else{
        alert ("Wrong user input")
        splitOne();
    }

}

function getDescendents(){
    // return an array containing the members of the person's family
    // the array should contain each person's unmodified object
}
*/
