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



        case "family":
            var kids = getKids (person, people)
            
            var message = "Kids:"
            
              for (var i = 0; i < kids.length; i ++) {
              message += kids[i].firstName + " " + kids[i].lastName + "\n"
              }
            alert(message)
            
            if(person.currentSpouse){
                var spouse = getPersonById(person.currentSpouse ,people);
            } 

            if(person.parents[0]){
                var parentOne = getPersonById(person.parents[0], people);
            }

            if(person.parents[1]){

                var parentTwo = getPersonById(person.parents[1], people);
            }

            if(people){

                var siblings = findSiblings(person, people); 
            }
            
           
          
                
    
                




            

            if (spouse, parentOne, parentTwo, siblings, kids) {
                alert("Spouse:" + " " + spouse.firstName + " " + spouse.lastName);
            } 
            if(parentOne) { 
                alert("Parent 1:" + " " + parentOne.firstName + " " + parentOne.lastName);
            }
            if(parentTwo) { 
                alert("Parent 2:" + " " + parentTwo.firstName + " " + parentTwo.lastName);
            }
            if (siblings){

                alert("Siblings:" + " " + siblings.firstName);
            }
        
                
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






function getPersonById (id ,people) {
    var personfamily = people.filter(function (person) {
        return person.id === id});

    return personfamily[0]
}


function findSiblings(myPerson, people){ 


    var parentIDs = myPerson.parents;

    var siblings = people.filter(function(person){

        if( myPerson.parents && parentIDs[0] == person.parents[0]  ){
            return true;
        }

    });

    return(siblings);

}

function getKids (parent,people){

    var kids= people.filter(function(person){
        if (person.parents[0] == parent.id) {
            
            return true;  
        }
        else if (person.parents[1]== parent.id) {
            return true;
        } 
        else {
            return false;
        }
    });
    return kids;
}















                            //Moved to the bottom until finished with Goals 1 and 2

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
        
        searchByCriteria ();
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











    /*                                       
    var answer = prompt ("enter" to keep searching. Otherwise, hit enter to see your selection).trim.to toLowerCase


    if (answer === "yes")


        }

        searchPerson (pass in all attributes)


           call the function that filters all of the attributes

           return results back to user 

            prompt/ask user if they see the user they are looking for and have them type in name. If name not present ask user if they would like to restart. 

            if name present take to mainMenu




    function ageFinder(){ ***i think that there is a javascript function that can give you todays date. that should mean that we can always subtract today's date from the dob. 
            //check today's date
            //take in dob
            //take year that they were born in and subtract it from current year
            //return back to age function

    }

 For parents: a for loop needs to be created here so people that have two parents can be printed. I believe that the for loop has to use the array.length property. Example: for (array.length = 2; array.length= 0; go down by one every time.)

                    -Tell the array to look for two parents. If there are two parents then print both names. 
                    -If not two parents then loop through again and look for one parent. If one parent then print one name. 
                    -If not one parent loop through again and alert user "No parents or N/A"

            Pseudo Code
                For siblings-if another object has at least one of the same parents as another object, then they are siblings

                For children-if an object has its own ID in another objects parent attribut, then the second object is a child of 


function splitOne(){

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
