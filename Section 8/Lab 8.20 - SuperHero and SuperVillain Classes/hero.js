class SuperHuman {
	constructor(name, powerLevel) {
		this.name = name;
		this.powerLevel = powerLevel;
	}
}

class SuperHero extends SuperHuman {
	constructor(name, alias, powerLevel) {
		super(name, powerLevel);
		this.alias = alias;
	}

	battle(villain) {
		return this.powerLevel >= villain.powerLevel;
	}

}
class SuperVillain extends SuperHuman {
	constructor(name, alias, powerLevel) {
		super(name, powerLevel);
		this.alias = alias;
	}

	getEvilChuckle() {
		return "Ha ha ha!";
	}

}

const heroes = {
	"Super Bacon": new SuperHero("Jack Oinker", "Super Bacon", 2),
	"Flat-Man": new SuperHero("Peter Pranker", "Flat-Man", 5),
	"Mighty Woman": new SuperHero("Diana Dense", "Mighty Woman", 8),
	"Captain Marvelous": new SuperHero("Carol Hangers", "Captain Marvelous", 9)
};

const villains = {
	"The Jokester": new SuperVillain("Jack Nastier", "The Jokester", 3),
	"Magnet Man": new SuperVillain("Max Eisenhardt", "Magnet Man", 6),
	"Lex Loner": new SuperVillain("Lex Loner", "Lex Loner", 2),
	"Thankos": new SuperVillain("Thankos", "Thankos", 9)
};

registerHandlers();

function registerHandlers() {
	document.querySelector("#heroSelect").addEventListener("change", selectionChanged);
	document.querySelector("#villainSelect").addEventListener("change", selectionChanged);

	selectionChanged();
}

function selectionChanged() {
	const selectedHeroValue = document.querySelector("#heroSelect").value;
	const selectedVillainValue = document.querySelector("#villainSelect").value;

	const selectedHero = heroes[selectedHeroValue];
	const selectedVillain = villains[selectedVillainValue];

	let winner = selectedHero.battle(selectedVillain);
	if (winner) {
		document.getElementById("winner").innerHTML = "Winner: " + selectedHero.alias +"!";
	} else {
		document.getElementById("winner").innerHTML = "Winner: " + selectedVillain.alias+"!";
	}
}
