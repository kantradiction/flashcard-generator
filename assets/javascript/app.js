var basicCard = require("./basicCard");
var clozeCard = require("./clozeCard");
var inquirer = require("inquirer");
var cards = [];

function chooseCard() {
	inquirer.prompt({
		type: "list",
		message: "What kind of card would you like to create?",
		choices: ["Basic Card", "Cloze Card"],
		name: "type"
	}).then(function(response) {
		createCard(response.type);
	});
}
function createCard(type) {
	if (type === "Basic Card") {
		inquirer.prompt([
		{
			type: "input",
			message: "What will the front of the card say?",
			name: "front"
		}, {
			type: "input",
			message: "What will the back of the card say?",
			name: "back"
		}
		]).then(function(response) {
			let card = new basicCard(response.front, response.back);
				console.log("//////////////////////////////////////////////////////");
				console.log("//                   Basic Card                     //");
				console.log("//                                                  //");
				console.log("//////////////////////////////////////////////////////");
				console.log("/  ////////////////////////////////////////////////  /");
				console.log("/  /               Front of Card                  /  /");
				console.log("/  /                                              /  /");
				console.log("/  /                                              /  /");
				console.log("/  / " + card.front);
				console.log("/  /                                              /  /");
				console.log("/  /                                              /  /");
				console.log("/  /                                              /  /");
				console.log("/  ////////////////////////////////////////////////  /");
				console.log("/                                                    /");
				console.log("/  ////////////////////////////////////////////////  /");
				console.log("/  /                Back of Card                  /  /");
				console.log("/  /                                              /  /");
				console.log("/  /                                              /  /");
				console.log("/  / " + card.back);
				console.log("/  /                                              /  /");
				console.log("/  /                                              /  /");
				console.log("/  /                                              /  /");
				console.log("/  ////////////////////////////////////////////////  /");
				console.log("//////////////////////////////////////////////////////");
			chooseCard();
		});
	} else {
		inquirer.prompt([
		{
			type: "input",
			message: "What is the full text of this card?",
			name: "fullText"
		}, 
		{
			type: "input",
			message: "What is the cloze of this card",
			name: "cloze"
		}
		]).then(function(response) {
			let card = new clozeCard(response.fullText, response.cloze);
			if (card.acceptable === true) {
				console.log("//////////////////////////////////////////////////////");
				console.log("//                   Cloze Card                     //");
				console.log("//                                                  //");
				console.log("//////////////////////////////////////////////////////");
				console.log("/  ////////////////////////////////////////////////  /");
				console.log("/  /               Front of Card                  /  /");
				console.log("/  /                                              /  /");
				console.log("/  /                                              /  /");
				console.log("/  / " + card.partial);
				console.log("/  /                                              /  /");
				console.log("/  /                                              /  /");
				console.log("/  /                                              /  /");
				console.log("/  ////////////////////////////////////////////////  /");
				console.log("/                                                    /");
				console.log("/  ////////////////////////////////////////////////  /");
				console.log("/  /                Back of Card                  /  /");
				console.log("/  /                                              /  /");
				console.log("/  /                                              /  /");
				console.log("/  / " + card.cloze);
				console.log("/  /                                              /  /");
				console.log("/  /                                              /  /");
				console.log("/  /                                              /  /");
				console.log("/  ////////////////////////////////////////////////  /");
				console.log("//////////////////////////////////////////////////////");
			}
			chooseCard();
		});
	}
}

/*function readCard() {
	inquirer.prompt([
		{
				type: "list",
				name: "wantedCard",
				message: "Which card do you want?",
				choices: [
				for (var i = 0; i < cards.length; i++) {
					return card[0].front + ", ";
				}]
		}
	]).then(function(response) {
		console.log(response.front);
	});
}*/

/*function chooseOrRead() {
	inquirer.prompt({
		type: "list",
		name: "ChooseOrRead",
		message: "Would you like to choose a card or read a card?",
		choices: ["Choose", "Read"]
	}).then(function(response) {
		if (response.chooseOrRead === "Choose") {
			chooseCard();
		} else {
			readCard();
		}
	})
}*/

chooseCard();