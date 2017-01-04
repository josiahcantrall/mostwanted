function initMostWanted(people){
    alert("Welcome to Most Wanted. Follow the prompts to search for infromation on the person you seek.");
    do{
        var searchType = prompt ("Do you want to search by name or attributes? Enter the word 'name' or 'attributes'.");
    }while(!(searchType== "name" || searchType == "attributes"));
    switch(searchType){
        case "name":
        var person = getPerson(prompt("Enter person's first name."), prompt("Enter person's last name."), people);
        mainMenu(person, people);
        break;
        case "attributes":
        break;
        default:
        alert("There was an error processing your request.");
        initMostWanted(people);
    }
    
}

function getPerson(firstName, lastName, people) {
    // body...
}

function mainMenu (person, people) {


if(!person){
    alert("could not find individual.");
    return initMostWanted(people);

var displayOption = prompt("Found " + person.firstName + " " + person.lastName + ". Do you want to know their 'info', 'family', next of 'kin', or 'descendants'? Type the option you want or 'restart' or 'quit'.");

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


//After finding someone, this will display all of their info!
function getInfo(person,people){
   alert("Person." + person.firstName + " " + person.lastName+ "");
   mainMenu(person,people)
}
        
   


