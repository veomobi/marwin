const results = {
    htmlElement:document.querySelector(
        "#results"
    ),
    maxResultsPerPage:25,
    latestResults: [],
    getResults(query = GLOBAL_VARIABLES.searchQuery){
        this.latestResults = [];
        itemsExtended.forEach(
            elm=>{
                if (elm.includes(query)){
                    this.latestResults.push(elm);
                }
            }
        )
        GLOBAL_VARIABLES.rawResults = this.latestResults;
        this.latestResults = divideArray(this.latestResults,this.maxResultsPerPage);
        GLOBAL_VARIABLES.results = this.latestResults;
        return this.latestResults;
    },
    showResults(){
        this.htmlElement.innerHTML = ""
        this.latestResults[Number(GLOBAL_VARIABLES.pageNumber)].forEach(element => {
            this.htmlElement.innerHTML +=
            `<div class="result">${element}</div>`;
        });
    }
}

function divideIntoArrays(bigArray,chunkSize){
    let currentSize = 0;
    let currentArray = [];
    let finalChunks = [];
    bigArray.forEach(
        element=>{
            if (currentSize < chunkSize){
                currentArray.push(element);
                currentSize++;
            } else{
                finalChunks.push(currentArray);
                currentArray = [];
                currentSize = 0;
            }
        }
    )
    return finalChunks;
}

function divideArray(array,chunkSize){
    let numArrays = Math.ceil(array.length / chunkSize);
    console.log(numArrays)
    let finalChunks = [];
    let index = 0;
    for (let i = 0; i < numArrays; i++){
        let newArr = [];
        for (let j = 0; j < chunkSize; j++){
            newArr.push(array[index]);
            index++;
            if (index > array.length - 1){
                break;
            }
        }
        finalChunks.push(newArr);
    }
    return finalChunks
}