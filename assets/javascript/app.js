$(document).ready(function() {

    //1. Link to Firebase

    var trainSchedule = new Firebase ("https://train-schedule-92a45.firebaseio.com");
    
    //2. Button for adding Trains

    $("#addTrainBtn").on("click", function(){

        var trainName = $("#trainNameInput").val().trim();
		var lineName = $("#lineInput").val().trim();
		var destination = $("#destinationInput").val().trim();
		var trainTimeInput = moment($("#trainTimeInput").val().trim(), "HH:mm").subtract(10, "years").format("X");;
		var frequencyInput = $("#frequencyInput").val().trim();


    // Test for variables entered
		console.log(trainName);
		console.log(lineName);
		console.log(destination);
		console.log(trainTimeInput);
		console.log(frequencyInput);

    });

});