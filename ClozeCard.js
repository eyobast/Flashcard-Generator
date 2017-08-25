var ClozeCard = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.getPartial = function() {
        var str = text;
        var res = str.replace(cloze, "...");
        return res;
    };
    this.partial = this.getPartial();
};

// var firstQuestion = new ClozeCard("George Washington is the first prez of the US.", "George Washington");

// // ClozeCard.prototype.partial=partial; 
// console.log("Full text: " + firstQuestion.text);
// console.log("Answer: " + firstQuestion.cloze);
// console.log("Partial text: " + firstQuestion.partial());


module.exports = ClozeCard;