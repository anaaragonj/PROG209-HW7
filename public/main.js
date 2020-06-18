var lastID = 1;
var trackerArray = [];
var trackerObject= function ( night,nap, exercisename,reps,sets,weight, name, totalCalories) {
    this.night = night;
    this.nap = nap;
    this.totalhrs = Number(night) + Number(nap);
    this.exercisename = exercisename;
    this.reps = reps;
    this.sets = sets;
    this.weight = weight;
    this.name = name;
    this.totalCalories = totalCalories;
    this.ID = lastID++;
};

require(["FoodItem","exercise","sleephrs"],function(){
    
    //creating breakfast food items
    let foodItems = [];
    let totalCal = 0;

    //creating lunch food items
    let foodItemslunch = [];
    let totalCallunch = 0;

    //creating dinner food items
    let foodItemsdinner = [];
    let totalCaldinner = 0;

    //creating snacks food items
    let foodItemssnack = [];
    let totalCalsnack = 0;

    
    //Add event when Total Button for Breakfast is clicked
    var totalBtn = document.getElementById("TotalButton");
    totalBtn.addEventListener("click", buttonClicked, false);
    
    //Add event when Clear Button for Breakfast is clicked
    var clearBtn = document.getElementById("clearButton");
    clearBtn.addEventListener("click", buttonClear, false);

    //Add event when Total Button for Lunch is clicked
    var totalBtnlunch = document.getElementById("TotalButtonlunch");
    totalBtnlunch.addEventListener("click", buttonClickedlunch, false);

    //Add event when Clear Button for Lunch is clicked
    var clearBtnlunch = document.getElementById("clearButtonlunch");
    clearBtnlunch.addEventListener("click", buttonClearlunch, false);

     //Add event when Total Button for dinner is clicked
     var totalBtndinner = document.getElementById("TotalButtondinner");
     totalBtndinner.addEventListener("click", buttonClickeddinner, false);
 
     //Add event when Clear Button for dinner is clicked
     var clearBtndinner = document.getElementById("clearButtondinner");
     clearBtndinner.addEventListener("click", buttonCleardinner, false);

     //Add event when Total Button for snack is clicked
    var totalBtnsnack = document.getElementById("TotalButtonsnack");
    totalBtnsnack.addEventListener("click", buttonClickedsnack, false);

    //Add event when Clear Button for snack is clicked
    var clearBtnsnack = document.getElementById("clearButtonsnack");
    clearBtnsnack.addEventListener("click", buttonClearsnack, false);

    //Submit 
    var Submit = document.getElementById("submit");
    Submit.addEventListener("click", submitdata, false);

    //Submit
    var submit1 = document.getElementById("submit1");
    submit1.addEventListener("click", submitdata, false);

    //Submit
    var submit2 = document.getElementById("submit2");
    submit2.addEventListener("click", submitdata, false);

    
    var updateBtn = document.getElementById("update");
    updateBtn.addEventListener("click", updateList, false);

function updateList(){
    $.get("/getAlldata", function(data, status){

        const whichElement = document.getElementById("trackerList")
        trckerdata = data;
        whichElement.innerHTML = "";
        trckerdata.forEach(function(item, index) {   // build one li for each item in array
            var li = document.createElement("li");
            li.setAttribute("data-parm", item.ID);
            li.setAttribute("class", "movieClass");
            li.innerHTML =li.innerHTML +  " totalCalories: " + item.totalCalories; 
            whichElement.appendChild(li);

        });
    });

}

function submitdata(){
   
        //var a =  document.getElementById("name").value;
        //var b = document.getElementById("calories").value; 
        var HowMany = document.getElementById("HowMany").value; 
        //var d =  document.getElementById("namelunch").value; 
        //var e=  document.getElementById("Calorieslunch").value; 
        var HowManylunch=  document.getElementById("HowManylunch").value; 
        //var g = document.getElementById("namedinner").value; 
        //var h =  document.getElementById("caloriesdinner").value; 
        var HowManydinner=  document.getElementById("HowManydinner").value; 
        //var j=  document.getElementById("namesnack").value; 
        //var k=  document.getElementById("Caloriessnack").value; 
        var HowManysnack=  document.getElementById("HowManysnack").value; 
        var exercisename=  document.getElementById("exercisename").value; 
        var reps = document.getElementById("reps").value; 
        var sets =  document.getElementById("sets").value; 
        var weight=  document.getElementById("weight").value; 
        var night=  document.getElementById("night").value; 
        var nap=  document.getElementById("nap").value; 
        var totalCalories = HowMany + HowManylunch + HowManysnack + HowManydinner;
        
        
        newData = new trackerObject( night,nap, exercisename,reps,sets,weight, name, totalCalories);

        $.ajax({
         url : "/AddData",
         type: "POST",
         data: JSON.stringify(newData),
         contentType: "application/json; charset=utf-8",
         dataType   : "json",
         success: function (result) {
             console.log(result);
             document.location.href = "index.html#Show";  // go to this page to show item was added
         }
        });
        

} 



    //Breakfast - This function clears the screen 
    function buttonClear () {
        document.getElementById ("name").value = "";
        document.getElementById ("Calories").value = "";
        document.getElementById ("HowMany").value = "";
    }

    //Breakfast - This function adds the foodItems to the array 
    function buttonClicked() {
        myFunction();
        outputText = "";
        for (i = 0; i < foodItems.length; i++) {
            outputText += foodItems[i].name + ", " + foodItems[i].Calories + ", " + foodItems[i].HowMany;
            totalCal +=  foodItems[i].totalCalories; 
        }
        document.getElementById("output1").innerHTML = outputText;
        document.getElementById("output2").innerHTML = totalCal;
    }

    //Breakfast - This function creates a foodItem
    function myFunction() {  
        let name = document.getElementById ("name").value;
        let Calories = document.getElementById ("Calories").value;
        let qty = document.getElementById("HowMany").value;
        let newFoodItem = new FoodItem(name, Calories, qty);
        foodItems.push(newFoodItem);
        return;
    }   
    // making clear button work for lunch
    function buttonClearlunch () {
        document.getElementById ("namelunch").value = "";
        document.getElementById ("Calorieslunch").value = "";
        document.getElementById ("HowManylunch").value = "";
    }
    // telling the button what to do when it is clicked fo lunch
    function buttonClickedlunch() {
        myFunctionlunch();
        outputText = "";
        for (i = 0; i < foodItemslunch.length; i++) {
            outputText += foodItemslunch[i].name + ", " + foodItemslunch[i].Calories + ", " + foodItemslunch[i].HowMany;
            totalCallunch +=  foodItemslunch[i].totalCalories; 
        }
        document.getElementById("output1lunch").innerHTML = outputText;
        document.getElementById("output2lunch").innerHTML = totalCallunch;
    }
    // Function for lunch
    function myFunctionlunch() {
        let name = document.getElementById("namelunch").value;
        let Calories = document.getElementById("Calorieslunch").value;
        let qty = document.getElementById("HowManylunch").value;
        let newFoodItem = new FoodItem(name, Calories, qty);
        foodItemslunch.push(newFoodItem);
        return;
    }
    // making clear button work for dinner
    function buttonCleardinner () {
        document.getElementById ("namedinner").value = "";
        document.getElementById ("Caloriesdinner").value = "";
        document.getElementById ("HowManydinner").value = "";
    }
    // telling the button what to do when it is clicked for dinner
    function buttonClickeddinner() {
        myFunctiondinner();
        outputText = "";
        for (i = 0; i < foodItemsdinner.length; i++) {
            outputText += foodItemsdinner[i].name + ", " + foodItemsdinner[i].Calories + ", " + foodItemsdinner[i].HowMany;
            totalCaldinner +=  foodItemsdinner[i].totalCalories; 
        }
        document.getElementById("output1dinner").innerHTML = outputText;
        document.getElementById("output2dinner").innerHTML = totalCaldinner;
    }
    // Function for dinner
    function myFunctiondinner() {
        let name = document.getElementById("namedinner").value;
        let Calories = document.getElementById("Caloriesdinner").value;
        let qty = document.getElementById("HowManydinner").value;
        let newFoodItem = new FoodItem(name, Calories, qty);
        foodItemsdinner.push(newFoodItem);
        return;
    }
    // making clear button work for 
    function buttonClearsnack () {
        document.getElementById ("namesnack").value = "";
        document.getElementById ("Caloriessnack").value = "";
        document.getElementById ("HowManysnack").value = "";
    }
    // telling the button what to do when it is clicked fo snack
    function buttonClickedsnack() {
        myFunctionsnack();
        outputText = "";
        for (i = 0; i < foodItemssnack.length; i++) {
            outputText += foodItemssnack[i].name + ", " + foodItemssnack[i].Calories + ", " + foodItemssnack[i].HowMany;
            totalCalsnack +=  foodItemssnack[i].totalCalories; 
        }
        document.getElementById("output1snack").innerHTML = outputText;
        document.getElementById("output2snack").innerHTML = totalCalsnack;
    }
    // Function for snack
    function myFunctionsnack() {
        let name = document.getElementById("namesnack").value;
        let Calories = document.getElementById("Caloriessnack").value;
        let qty = document.getElementById("HowManysnack").value;
        let newFoodItem = new FoodItem(name, Calories, qty);
        foodItemssnack.push(newFoodItem);
        return;
    }
});

    // Fitness page
        
    //creating exercise 
    let exercise = [];

    //Add event when Click to add to your total button is clicked
    var AddExercise = document.getElementById("AddExercise");
    AddExercise.addEventListener("click", buttonClicked2, false);

    //Add event when Clear Button is clicked
    var clearBtnexercise = document.getElementById("clearButton2");
    clearBtnexercise.addEventListener("click", buttonclearexercise, false);
        
    function buttonclearexercise () {
        document.getElementById ("exercisename").value = "";
        document.getElementById ("reps").value = "";
        document.getElementById ("sets").value = "";
        document.getElementById ("weight").value = "";
    }
    // This function adds the exercise to the array 
    function buttonClicked2() {
        myFunctionExercise();
        outputText = "";
        for (i = 0; i < exercise.length; i++) {
            outputText += exercise[i].exercisename + ", " + exercise[i].reps + ", " + exercise[i].sets +","+ exercise[i].weight;
        }  
        document.getElementById("output3").innerHTML = outputText;
    }

     //This function creates a exercise
     function myFunctionExercise() {  
        let exercisename = document.getElementById ("exercisename").value;
        let reps = document.getElementById ("reps").value;
        let sets = document.getElementById("sets").value;
        let weight = document.getElementById("weight").value;
        let newexercise = new Exercise(exercisename, reps, sets, weight);
        exercise.push(newexercise);
        return;
     }

     // Sleep hours page
    //creating Sleep HRS
    let sleephrsarray = [];
    let totalhrs = 0;

    //Add event when Click to add to your total button is clicked
    var addsleephrs = document.getElementById("addsleephrs");
    addsleephrs.addEventListener("click", buttonClicked3, false);

    //Add event when Clear Button is clicked
    var clearBtnsleephrs = document.getElementById("clearBtnSH");
    clearBtnsleephrs.addEventListener("click", buttonclearsleephrs, false);

    function buttonclearsleephrs () {
        document.getElementById ("night").value = "";
        document.getElementById ("nap").value = "";
    }

    // This function adds the sleep hrs to the array 
    function buttonClicked3() {
        myFunctionSleephrs();
        outputText = "";
        for (i = 0; i < sleephrsarray.length; i++) {
            outputText += sleephrsarray[i].night + ", " + sleephrsarray[i].nap;
            totalhrs +=  sleephrsarray[i].totalhrs; 
        }  
        document.getElementById("outputsh1").innerHTML = outputText;
        document.getElementById("outputsh2").innerHTML = totalhrs;
    }
     //This function creates the total of hrs
     function myFunctionSleephrs() {  
        let night = document.getElementById ("night").value;
        let nap = document.getElementById ("nap").value;
        let newsleephrs = new sleephrs(night, nap);
        sleephrsarray.push(newsleephrs);
        return;
     }

     // this function is shared by Home and Delete page to add li's to which ever ul is passed in
function UpdateDisplay() {

    $.get("/getAlldata", function(data, status){  // AJAX get
        trackerArray = data;  // put the returned server json data into our local array
    
    whichElement = document.getElementById("trackerList")

    console.log(trackerArray);

    whichElement.innerHTML = "";
    trackerArray.forEach(function(item, index) {   // build one li for each item in array
        var li = document.createElement("li");
        li.setAttribute("data-parm", item.ID);
        //li.setAttribute("class", "movieClass");
        //whichElement.appendChild(li);

        // I got rid of this "double link" approach that I picked up from a web example years ago
        //li.innerHTML =li.innerHTML +  ": " + " ID: " + item.ID + "  " + item.Title +"  <a  data-transition='pop'  class='oneMovie'  data-parm=" + item.ID + " href='#home'> Get Details </a> "
        
        li.innerHTML =li.innerHTML +  " : " + " ID: " + item.ID + "  "; 
       
        // var uriTitle = encodeURI(item.title);  // this is needed if you are using a field that might have spaces in it.  we do not
     
      // now each li contains text for ID and title, and also an embedded data-parm value and class name
    });   // end of forEach array 
  
     // now we loop thru the li's and add an event for each one 
     // if user clicks any, it writes >>that<< items data-parm into the hidden html 
     var classname = document.getElementsByClassName("movieClass");  // using css class to mark a collection of elements, or li's
     Array.from(classname).forEach(function (element) {
         element.addEventListener('click', function(){
             var parm = this.getAttribute("data-parm");  // passing in the ID of a particular movie
             document.getElementById("IDparmHere").innerHTML = parm;  // this element must be on the page with the li's
             document.location.href = "index.html#details";  // jump to details page
         });
    });  // end of adding li events


})
}
     //var data = {
       // name: "Ana",
        //totalhrs:"8",
        //totalCaldinner:"500",
        //totalCallunch:"500",
        //totalCalories:"500",
        //totalCalsnack:"300",
        //exercise:"45"
        
     // }
  
  //var jsonData = JSON.stringify(data);

  //var fs = require('fs');
//fs.writeFile("lifestyle.JSON", jsonData, function(err) {
  //  if (err) {
    //    console.log(err);
    //}
//});

//var fs = require("fs");

//fileManager  = {
  //read: function() {
    //var rawdata = fs.readFileSync('lifestyle.json');
    //let goodData = JSON.parse(rawdata);
    //ServerArray = goodData;
    //},
     
