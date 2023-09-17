let items = [];
generateData(2000, 90);

function randomLetter() {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let rand = Math.round((Math.random()) * 26);
    return letters[rand]
}

function generateData(entries = 300, itemLength = 20){
    for (let i = 0; i < entries; i++){
        let newEntry = ""
        for (let j = 0; j < itemLength; j++){
            newEntry += randomLetter();
        }
        items.push(newEntry);
    }
}