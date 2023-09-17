const results = {
    htmlElement:document.querySelector(
        "#results"
    ),
    maxResultsPerPage:25,
    latestResults: [],
    query:undefined,
    getResults(query = GLOBAL_VARIABLES.searchQuery){
        this.query = query;
        this.latestResults = [];
        items.forEach(
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
        GLOBAL_VARIABLES.results[Number(GLOBAL_VARIABLES.pageNumber)].forEach(element => {
            let string = '<div class="result">'
            string += element.replace(this.query, `<span class="word">${this.query}</span>`);
            string += "</div>";

            console.log(string)
            this.htmlElement.innerHTML += string;

        });
    }
}

function divideArray(array,chunkSize){
    let numArrays = Math.ceil(array.length / chunkSize);
    let finalChunks = [];
    let index = 0;
    for (let i = 0; i < numArrays; i++){
        let newArr = [];
        for (let j = 0; j < chunkSize; j++){
            newArr.push(array[index]);
            index++;
            if (index > array.length -1){
                break;
            }
        }
        finalChunks.push(newArr);
    }
    return finalChunks
}