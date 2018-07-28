
class CalcLogic {
    constructor() {
        this.display = 0;
        this.runningValue = null;
        this.total = 0;

        this.mode = 'None';
    }

    isNumber(number) {
        return !isNaN(number) && number !== null;
    }
 
    pressKey(key) {
        let n = 0;
        let parsedKey = parseInt(key);

        if (this.isNumber(parsedKey)) {

            //number
            if (this.runningValue === null) this.runningValue = 0;

            if (this.mode === 'None') {
                this.total = 0;
                this.mode = 'Plus';
            }

            this.runningValue *= 10;
            this.runningValue += parsedKey;
            this.display = this.runningValue;

        } else {

            //meta key
            switch (key) {

                case 'Clear':
                    if (this.isNumber(this.runningValue)) {
                        this.runningValue = null;
                    } else {
                        this.runningValue = 0;
                        this.total = 0;
                        this.mode = 'None';
                    }
                    this.display = 0;
                    break;

                case 'Plus':
                    if (this.isNumber(this.runningValue)) {
                        if(this.mode === 'Minus') {
                            this.total -= this.runningValue;
                            this.runningValue = 0;
                        }
                        if(this.mode === 'Plus') {
                            this.total += this.runningValue;
                            this.runningValue = 0;
                        }
                    }
                    this.display = this.total;
                    this.mode = 'Plus';

                    break;

                case 'Minus':
                    if (this.isNumber(this.runningValue)) {    
                        if(this.mode === 'Minus') {
                            this.total -= this.runningValue;
                            this.runningValue = 0;
                        }
                        if(this.mode === 'Plus') {
                            this.total += this.runningValue;
                            this.runningValue = 0;
                        }
                    }
                    this.display = this.total;
                    this.mode = 'Minus';

                    break;

                case 'Multiply':
                    if (this.isNumber(this.runningValue)) {
                        if(this.mode === 'Minus') {
                            this.total -= this.runningValue;
                            this.runningValue = 0;
                        }
                        if(this.mode === 'Plus') {
                            this.total += this.runningValue;
                            this.runningValue = 0;
                        }
                        if(this.mode === 'Multiply') {
                            this.total *= this.runningValue;
                            this.runningValue = 0;
                        }
                    } 
                    this.display = this.total;
                    this.mode = 'Multiply';
                    break;


                case 'Equals':
                    if (this.isNumber(this.runningValue)) {
                        if (this.mode === 'Plus' || this.mode === 'None') {
                            this.total += this.runningValue;
                        } else if (this.mode === 'Minus') {
                            this.total -= this.runningValue;
                        } else if(this.mode === 'Multiply') {
                            this.total *= this.runningValue;
                        }
                    }
                    this.display = this.total;
                    this.runningValue = null;
                    break;

                default:
                    this.display = 'Error';
                    break;
            }
        }
    }

    getDisplayValue() {
        return this.display;
    }
}

export default CalcLogic;