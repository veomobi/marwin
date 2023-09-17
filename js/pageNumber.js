const pageNumber = {
    htmlElement: document.querySelector(
        "#page-input input"
    ),
    currentPageNumber:undefined,
    inputListener(ctx = this){
        ctx.updatePageNumber();
        results.showResults();
    },
    updatePageNumber(ctx = this){
        ctx.currentPageNumber = ctx.htmlElement.value;
        GLOBAL_VARIABLES.pageNumber = ctx.currentPageNumber;
    },
    activate(){
        this.htmlElement.addEventListener(
            "input",()=>{this.inputListener(this)}
        )
    }
}

pageNumber.updatePageNumber();