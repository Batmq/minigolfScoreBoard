export default class ScoreBoard {

    constructor() {
        this.minusButton = document.querySelector("#MinusButton");
        this.plusButton = document.querySelector("#PlusButton");
        this.count = 1;
        this.countEl = document.getElementById("count");


        this.minusButton.addEventListener("click", (e) => this.minus(e));
        this.plusButton.addEventListener("click", (e) => this.plus(e));



    }

    minus(e){
        if (this.count > 0) {
            this.count--;
            this.countEl.value = this.count;
        }


        }


    plus(e) {
        this.count++;
        this.countEl.value = this.count;

    }





}
