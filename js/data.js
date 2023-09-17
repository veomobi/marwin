const items = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
    "item8",
    "item9",
    "item10",
    "item11",
    "item12",
    "item13",
    "item14",
    "item15",
    "item16",
    "item17",
    "item18",
    "item19",
    "item20",
    "item21",
    "item22",
    "item23",
]

let itemsExtended = [];
generateData(2000, 60);

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
        itemsExtended.push(newEntry);
    }
}