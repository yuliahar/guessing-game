class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.average();
    }

    lower() {
        this.max = this.average();
    }

    greater() {
        this.min = this.average();
    }

    average() {
        return Math.ceil((this.max + this.min) / 2);
    }
}

module.exports = GuessingGame;
