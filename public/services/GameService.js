var myApp = angular.module('myApp');
// GameService contains all relevant methods for Game objects
myApp.service('GameService', function(){

  // adds Game to Parse db. 
  this.addGame = function(game) {
    // Extend Game Subclass
    var Game = Parse.Object.extend("Game");
    // Initialize a new Game object and assign all relevant fields
    // fields must match the model fields that controller sends
    var _game = new Game();
    _game.set("name" , game.name);
    // Save newly created and set game
    _game.save(null, {
      // success and error callbacks
      success: function(_game) {
        console.log('New object created with objectId: ' + _game.id);
      },
      error: function(_game, error) {
        console.log('Failed to create new object, with error code: ' + error.message);
      }
    });
  }
});