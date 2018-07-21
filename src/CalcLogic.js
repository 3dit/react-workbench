
class CalcLogic {
    constructor() {
        this.display = 0;
        this.runValue = null;
        this.total = 0;

        this.mode = 'None';
    }

    pressKey(key) {
        let n = 0;
        let parsedKey = parseInt(key);
        if (!isNaN(parsedKey)) {
            //number
            if (this.runValue === null) this.runValue = 0;
            if (this.mode === 'None') {
                this.total = 0;
                this.mode = 'Plus';
            }
            this.runValue *= 10;
            this.runValue += parsedKey;
            this.display = this.runValue;
        } else {
            //meta key
            switch (key) {

                case 'Clear':
                    if (this.runValue !== null) {
                        this.runValue = null;
                        this.display = 0;
                    } else {
                        this.runValue = 0;
                        this.display = 0;
                        this.total = 0;
                        this.mode = 'None';
                    }
                    break;

                case 'Plus':
                    if (!isNaN(this.runValue)) {
                        if(this.mode === 'Minus') this.total -= this.runValue;
                        if(this.mode === 'Plus') this.total += this.runValue;
                        this.display = this.total;
                        this.runValue = null;
                    } else {
                        this.display = this.total;
                    }
                    this.mode = 'Plus';
                    break;

                case 'Minus':
                    if(!isNaN(this.runValue)) {
                        if(this.mode === 'Minus') this.total -= this.runValue;
                        if(this.mode === 'Plus') this.total += this.runValue;
                        this.display = this.total;
                        this.runValue = null;
                    } else {
                        this.display = this.total;
                    }
                    this.mode = 'Minus';
                    break;

                case 'Equals':
                    if (!isNaN(this.runValue)) {
                        if(this.mode === 'Plus' || this.mode === 'None') {
                            this.total += this.runValue;
                        } else if (this.mode === 'Minus') {
                            this.total -= this.runValue;
                        }
                    }
                    this.display = this.total;
                    this.runValue = null;
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