const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

let testCommand222 = new Command("MOVE", 222);
let testCommand555 = new Command("MOVE", 555);
let testStatusCheck = new Command("STATUS_CHECK");
let testModeChange = new Command("MODE_CHANGE", "LOW_POWER");
let testCommand666 = new Command("MOVE", 666);
let testStatusAgain = new Command("STATUS_CHECK");


// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
// 7 tests here!
  it("constructor sets position and default values for mode and generatorWatts", function() {
    let positions = new Rover(1337);
    expect(positions.position).toEqual(1337);
    expect(positions.mode).toEqual('NORMAL');
    expect(positions.generatorWatts).toEqual(110);
  });

  it("response returned by receiveMessage contains name of message", function() {
    let message = new Message('New Message');
    let newRover = new Rover(1337);
    let response = newRover.receiveMessage(message);

    expect(response.message).toEqual('New Message');
    
  });

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
    let newRover = new Rover(1020);
    let commands = [testModeChange, testStatusCheck];
    let message = new Message("Testing with two commands", commands);
    let response = newRover.receiveMessage(message);

    // console.log(response.results);
    expect(response.results.length).toEqual(2);
  });

  it("responds correctly to status check command", function() {
    let newRover = new Rover(1020);
    let commands = [testModeChange, testStatusCheck];
    let message = new Message("Checking rover status", commands);
    let response = newRover.receiveMessage(message);
    
    
    expect(response.results[0].roverStatus.mode).toEqual("NORMAL");
    expect(response.results[0].roverStatus.position).toEqual(1020);
    expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
    console.log(response.results)

  });

  // it("responds correctly to mode change command", function() {

  // });

  // it("responds with false completed value when attempting to move in LOW_POWER mode", function() {

  // });

  // it("responds with position for move command", function() {

  // });

});
