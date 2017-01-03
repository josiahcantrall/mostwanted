
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
    }else if (yourName === 'other criteria'){
        splitTwo();
    }
    else {
        alert("Wrong user input")
        initSearch();
    }
    }

function splitOne(){

    // get all the information you need to run the search
    var firstName = prompt("Who do you want to search for, enter first name");
    
    if(fullName === "Billy")
        
   

    // then pass that info to the respective function.
    var result = getPersonInfo("J", "T")

    // once the search is done, pass the results to the responder function
    responder(result);
}

function splitTwo(){
    var personCriteria = prompt("Please answer the following questions to find who you want. What is the persons age?")
    
}




function responder(results){
    // results may be a list of strings, an object, or a single string.
    alert(results);
}

function getPersonInfo(firstname, lastname){
    var result = "This will be the information for whoever you searched for";
    // return the object of a person
    return result;
}

function getFamily(){
    // return an array containing the members of the person's family
    // the array should contain each person's unmodified object
}

// there will be much more here, and some of the code above will certainly change
