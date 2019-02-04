

var config = {
    apiKey: "AIzaSyBsHOO96PW_nx8yqD66iva45ETN0WnEXBA",
    authDomain: "my-awesome-project-67417.firebaseapp.com",
    databaseURL: "https://my-awesome-project-67417.firebaseio.com",
    projectId: "my-awesome-project-67417",
    storageBucket: "my-awesome-project-67417.appspot.com",
    messagingSenderId: "678548730798"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$('#submitButton').on('click', function() {

    event.preventDefault();




    var input1 = $('#trainNameInput').val().trim();
    var input2 = $('#destinationInput').val().trim();
    var input3 = $('#firstTrainTimeInput').val().trim();
    var input4 = $('#frequencyInput').val().trim();
    

    


    

    


    //initialize values as empty strings!
    var trainName = '';
    var destination = '';
    var firstTrainTime = 0;
    var frequency = 0;

    


    database.ref().push({
        trainName: input1,
        destination: input2,
        firstTrainTime: input3,
        frequency: input4,
        dateAdded: firebase.database.ServerValue.TIMESTAMP


});



   

    


    
    



    
















    



});//end of on 'click' submit button
    
database.ref().on('child_added', function(childSnapshot) {

var trainNameDisplay = childSnapshot.val().trainName;
var destinationDisplay = childSnapshot.val().destination;
var firstTrainTimeDisplay = childSnapshot.val().firstTrainTime;
var frequencyDisplay = childSnapshot.val().frequency;
  
  console.log(frequencyDisplay);


var newDivTrainName = $('<div>');
var newDivDestination = $('<div>');
var newDivFirstTrainTime = $('<div>');
var newDivFrequency = $('<div>');


$(newDivTrainName).append(trainNameDisplay);
$(newDivDestination).append(destinationDisplay);
$(newDivFirstTrainTime).append(firstTrainTimeDisplay);
$(newDivFrequency).append(frequencyDisplay);

var currentTime = moment();
    console.log('current time: ' + moment(currentTime).format('hh:mm'));


var firstTrainTimeConvert = moment(firstTrainTimeDisplay, "hh:mm");
    console.log(firstTrainTimeDisplay + 'converted to hh:mm format');

    // var test = moment.duration(15, "minutes") + firstTrainTimeConvert;
    // console.log(test.);

    
    

var difference =  moment().diff(firstTrainTimeConvert, 'minutes');
console.log(difference + ' difference');
 

var diffConvert = difference % frequencyDisplay;

console.log(diffConvert + ' diffConvert');

var minutesAway = frequencyDisplay - diffConvert;




// console.log(minutesAway + ' minutes until next train!');

// console.log('difference in time: ' + difference + ' minutes');




$('#trainName').append(newDivTrainName);
$('#destination').append(newDivDestination);
$('#frequency').append(newDivFrequency);
$('#minutesAway').append(minutesAway + ' minute(s) <br>');
$('#nextArrival').append(newDivFirstTrainTime);



if (minutesAway === 0) {
    
    minutesAway == frequencyDisplay - diffConvert;
    
    
    
}






});// end of on 'child_added'

