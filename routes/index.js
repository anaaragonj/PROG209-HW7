var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /* res.render('index', { title: 'Express' }); */
  res.sendFile('index.html');
});

module.exports = router;


var fs = require("fs");

fs.appendFile("./lifestyle.json","", function(err){});

fileManager  = {
  read: function() {
    var rawdata = fs.readFileSync('./lifestyle.json');
    let goodData = JSON.parse(rawdata);
    ServerArray = goodData;
    },
  

  write: function() {
    let data = JSON.stringify(ServerArray);
    fs.writeFileSync('./lifestyle.json', data);
  },

  validData: function() {
  var rawdata = fs.readFileSync('./lifestyle.json');
  console.log(rawdata.length);
  if(rawdata.length < 1) {
    return false;
  }
  else {
    return true;
  }
}

};

var lastID = 1;
var ServerArray = [];
var trackerObject= function ( night, exercisename,reps,sets,weight, name, Calories, HowMany) {
    this.night = night;
    this.nap = nap;
    this.totalhrs = Number(night) + Number(nap);
    this.exercisename = exercisename;
    this.reps = reps;
    this.sets = sets;
    this.weight = weight;
    this.name = name;
    this.Calories = Calories;
    this.HowMany = HowMany;
    this.totalCalories = Calories * HowMany;
    this.ID = lastID++;
   
  }
  

if(!fileManager.validData()) {
  ///ServerArray.push(new MovieObject("MoonstruckXXX", 1981, "Drama", "Nicholas Cage", "Cher", "https://www.youtube.com/watch?v=M01_2CKL6PU" ));
  ///ServerArray.push(new MovieObject("Wild At Heart", 1982, "Drama", "Nicholas Cage", "Laura VanDern", "https://www.youtube.com/watch?v=7uRJartX79Q"));
  //ServerArray.push(new MovieObject("Raising Arizona", 1983, "Comedy", "Nicholas Cage", "Holly Hunter", "https://www.youtube.com/watch?v=NoXJKArYi1g"));
  //ServerArray.push(new MovieObject("USS Indianapolis: Men of Courage" , 2016, "Drama", "Nicholas Cage", "Emily Tennant", "https://youtu.be/ZDPE-NronKk"));
  //fileManager.write();
  //console.log("added 4 movies");
}
 else{
  lastID = 0;
  fileManager.read(); // do have prior info so load up the array
  for (let i=0; i < ServerArray.length; i++){
    if(Number(ServerArray[i].ID) >= Number(lastID) ){
      console.log(ServerArray[i].ID + "  " + lastID);
     lastID = (ServerArray[i].ID) +1;
  }
}
 
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index' );
});

/* GET home page. */
router.get('/getAlldata', function(req, res, next) {
  fileManager.read();
  res.json(ServerArray);
});




//  new code ***********************************************

/* Add one new note */
router.post('/AddData', function(req, res) {
  const newInfo = req.body;
  newInfo.ID = lastID++;
  ServerArray.push(newInfo);
  fileManager.write();
  res.status(200).json(newInfo);
});


router.delete('/DeleteNote/:ID', (req, res) => {
  const delID = req.params.ID;
  let found = false;

  for(var i = 0; i < ServerArray.length; i++) // find the match
  {
    console.log(ServerArray[i].ID)
      if(ServerArray[i].ID == delID){
        ServerArray.splice(i,1);  // remove object from array
        fileManager.write();
          found = true;
          break;
      }
  }

  if (!found) {
    console.log("not found");
    return res.status(500).json({
      status: "error: no such index in array"
    });
  } else {
  res.send('Info with ID: ' + delID + ' deleted!');
  }
});

module.exports = router;
