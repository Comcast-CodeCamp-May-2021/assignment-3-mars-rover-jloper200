class Rover {
  constructor(position, mode, generatorWatts) {
    this.position = position;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;

  }

  

  receiveMessage(message) {
    let response = {
      message: message.name,
      results: []
    }
    
    // }
    for (let i = 0; i < message.commands.length; i++) {
      let statusObject = {
        completed: true,
        roverStatus: {
          mode: this.mode,
          generatorWatts: this.generatorWatts,
          position: this.position
        }
      }
      if (message.commands[i].commandType === 'STATUS_CHECK') {
        response.results.push(statusObject);
        } 
      // response.results.push(message.commands[i]);
      // console.log(message.commands[i].commandType);
    
    }
    // for (let i = 0; i < message.commands.length; i++) {
    //   if (message.commands[i].commandType === 'MODE_CHANGE') {
    //     let lowPower = "LOW_POWER";
    //     this.mode = lowPower;
    //   }
    }
    return response;
  }
   // Write code here!

}

module.exports = Rover;