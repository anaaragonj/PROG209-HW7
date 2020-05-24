
require(["FoodItem","exercise"],function(){
    
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


     
    
});
