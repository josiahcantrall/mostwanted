
function initSearch(people) {
    alert("Welcome to Family Tree");
    var searchType = prompt("Do you want to search by name or other criteria? Enter the word 'name' or 'other criteria'.")
    switch (searchType){
        case "name":
            var person = findPerson(prompt("Enter person's first name."), prompt("Enter person's last name."), people);
            displayPerson(person.firstName, person.lastName);
            mainMenu(person, people);
            break;
        case "other criteria":
            criteriaSearch();
            break;
        default:
            alert("There was an error.");
            initSearch(people);
    }
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



        case "family":
            var spouse = getSpouse (person, people);

            var parentOne = getParentOne (person, people);

            var parentTwo = getParentTwo (person,people)


            var siblings = findSiblings(person, people); 
             for (var i = 0; i < siblings.length; i ++)
            
            var kids = getKids (person, people)
            for (var i = 0; i < kids.length; i ++)

            
            alert("Spouse: \n" + " " + spouse.firstName + " " + spouse.lastName + " " + "\n\n" + "Parent(s): \n" + parentOne.firstName + " " + parentOne.lastName + "\n" + parentTwo.firstName + " " + parentTwo.lastName + "\n\n" +  "Sibling(s): \n" + siblings[i].firstname + " " + siblings[i].lastName + "\n\n" + "Children: \n" + kids[i].firstName + " " + kids[i].lastName + "\n");
            mainMenu (person, people) ;


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

function findPerson (firstName, lastName, people){
    var person = people.filter(function (el) {
        return el.firstName.toLowerCase().trim() === firstName.toLowerCase().trim() && el.lastName.toLowerCase().trim() === lastName.toLowerCase().trim()});

    if(!person.length > 0){
        alert("Sorry! We could not find that individual.");
        return initSearch(people);
    }
    return person[0]
}


function getSpouse (person,people){
    if {
    var spouse = getPersonById(person.currentSpouse ,people);
    return spouse;
    }
    else {
        return false; 
    }
}


function getParentOne (person, people){
    if{
    var parentOne = getPersonById(person.parents[0], people);
    return parentOne;
    }
    else {
        return false;
    }
}


function getParentTwo (person, people){
    if{
    var parentTwo = getPersonById(person.parents[1], people);
    return parentTwo;
    }
    else {
        return false;
    }
}


function findSiblings(myPerson, people){ 
    var parentIDs = myPerson.parents;
    var siblings = people.filter(function(person){

        if(parentIDs[0] === person.parents[0] || parentIDs[1] === person.parents[1] ){
            return true;
        }
        else {
            return false;
        }
    });
    return(siblings);
}


function getKids (parent,people){
    var kids= people.filter(function(person){

        if (person.parents[0] === parent.id) {
            return true;  
        }
        else if (person.parents[1]=== parent.id) {
            return true;
        } 
        else {
            return false;
        }
    
    });
 
    return kids;
}


function getPersonById (id ,people) {
    var personfamily = people.filter(function (person) {
        return person.id === id});

    return personfamily[0];
}


function displayPerson (firstName, lastName){
    alert("Person:" + " " + firstName + " " + lastName);
}

function getDecendants (person, people){
    
}

function criteriaSearch(){

    alert("Please answer the following questions, if you do not know the answer please leave blank");


    var personheight = prompt("What is the person's height in inches? Ex. 71");
    var personWeight = prompt("How much does the person weigh? Please only put in the number format in lbs. Example: 175");
    var personAge = prompt("How old is the person you are looking for?");
    var personOccupation = prompt("What is the persons occupation? Please only put in one word. Example: doctor");
    var personEyeColor = prompt("What is the persons eye color? Please only put in one word. Example: green"); 
    var persongender = prompt("What gender is the person that you are looking for, 'male' or 'female'?");


    var filteredList = searchByCriteria(height, weight, age, job, eyeColor, sex);

    var selectedPerson = pickPerson(filteredList);

    mainMenu(selectedPerson, people);

    searchByCriteriax ();
}



function searchByCriteria(height, weight, age, job, eyeColor, sex){
    return people.filter(function(person){

        if(height && person.height !=height){
            return false;
        }
        if(weight && person.weight != weight){
            return false;
        }

        if (age && person.dob != age){
            return false
        }
        if (job && person.occupation != job){
            return false
        }
        if (eyes && person.eyeColor != eyes){
            return false
        }
        if (sex && person.gender != sex){
            return false
        }
        return true;
    });}

