var myApp = angular.module('myApp');
// include GameService as a dependency. 
myApp.controller('HomeCtrl',['GameService',function(GameService){

	// initialize a gameModel that view will interact with. 
	this.gameModel = {
		name : ""
	};

	// this.addGame will take the game from View and add it 
	this.addGame = function() {
		console.log("Game name : " + this.gameModel.name);
		// GameService.addGame(game) will hold actual logic for adding item
		GameService.addGame(this.gameModel);
		// clears the model
		this.gameModel = {};
	}
}]);
