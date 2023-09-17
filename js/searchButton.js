const searchButton = {
    htmlElement:document.querySelector(
        "#search-button"
    ),
    displayValue:0,
    clickListener(ctx){
        ctx.displayValue++;
        ctx.htmlElement.innerHTML = ctx.displayValue;
    },
    activate(){
        this.htmlElement.addEventListener(
            "click",()=>{this.clickListener(this)}
        );
    }
}

