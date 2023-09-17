const searchBar = {
    htmlElement:document.querySelector(
        "#search"
    ),
    inputListener(ctx){
        GLOBAL_VARIABLES.searchQuery = ctx.htmlElement.value;
        results.getResults();
        results.showResults();
    },
    activate(){
        this.htmlElement.addEventListener(
            "input",()=>{this.inputListener(this)}
        )
    }
}