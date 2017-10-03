function clozeCard(text, cloze) {
	if (this instanceof clozeCard) {
		this.text = text;
		this.cloze = cloze;
		this.clozeStart = this.text.toUpperCase().indexOf(this.cloze.toUpperCase());
		this.clozeEnd = this.clozeStart + (this.cloze.length);
		this.partial = "";
		this.acceptable = true;

		if (this.clozeStart == -1) {
			console.log("\n\"" + this.cloze + "\" does not appear in \"" + this.text + "\". Try again.\n");
			this.acceptable = false;
		} else {
			this.partial = "... " + this.text.slice(this.clozeEnd, this.text.length);
		}

	} else {
		return new clozeCard(text, cloze);
	}
}

module.exports = clozeCard;