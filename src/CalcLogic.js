

class CalcLogic {
    constructor() {
        this.display = 0;
        this.runningValue = null;
        this.total = 0;
        this.decimalMode = false;
        this.mode = 'None';
        this.multiplier = 10;
        this.factor = 1;

        this.sequence = [];

        this.pressKey = this.pressKey.bind(this);
    }

    isNumber(number) {
        return !isNaN(number) && number !== null;
    }

    getValue() {
        let di = 0;
        let v = 0;
        let hasDecimal = false;

        for (di = 0; di < this.sequence.length; di++) {
            if (this.sequence[di] === '.') {
                hasDecimal = true;
                break;
            }
        }

        for (let j = 0; j < di; j++) {
            let delta = di - j - 1;
            let factor = Math.pow(10, delta);
            v += this.sequence[j] * factor;
        }

        if(hasDecimal) {
            for (let k = di + 1; k < this.sequence.length; k++) {
                var delta = this.sequence.length - k;
                let factor = 1 / Math.pow(10, delta);
                v += this.sequence[k] * factor;
            }
        }

        return v;
    }

    getDisplayValue() {
        return this.display;
        
        /*
        var d = '';
        for(let i=0; i < this.sequence.length; i++) {
            d = d + `${this.sequence[i]}`;
        }
        return d == '' ? 0 : d;
        */
    }

    getDisplayFromSequence() {
        var d = '';
        for(let i=0; i < this.sequence.length; i++) {
            d = d + `${this.sequence[i]}`;
        }
        return d == '' ? 0 : d;

    }

    getSequenceFromValue(value) {
        let svalue = `${value}`;
        let seq = [];
        for(let i = 0; i < svalue.length; i++) {
            seq.push(svalue.substr(i, 1));
        }
        return seq;
    }

    pressKey(key) {
        let n = 0;
        let parsedKey = parseInt(key);

        if (this.isNumber(parsedKey)) {

            //number
            if (this.runningValue === null) {
                this.runningValue = 0;
                this.sequence = [];
            }


            this.sequence.push(parseInt(parsedKey));
            //this.runningValue = this.getValue();
            this.display = this.getDisplayFromSequence();
            this.runningValue= this.getValue();
            

            if (this.mode === 'None') {
                this.total = 0;
                this.mode = 'Plus';
            }

            // if(this.decimalMode) {
            //     this.multiplier = .1;
            // } else {
            //     this.multiplier = 10;
            // }


            // if(parsedKey === 0 && !decimalMode) parsedKey = 10;
            // if(parsedKey === 0 && decimalMode) parsedKey = 

            // this.runningValue += parsedKey * this.factor;

            // this.factor *= this.multiplier;


            // this.display = this.runningValue;



        } else {

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
                    this.sequence = [];

                    this.decimalMode = false;
                    this.multiplier = 10;
                    this.factor = 1;

                    break;


                case 'Decimal':

                    if(this.runningValue === null) {
                        this.runningValue = 0;
                    }
                    if(this.runningValue === 0) {
                        this.display = '0.';
                    }

                    this.sequence.push('.');

                    this.decimalMode = true;

                    this.multiplier = .1;
                    this.factor = .1;

                    break;


                case 'Plus':
                case 'Minus':
                case 'Multiply':
                case 'Divide':

                    if (this.isNumber(this.runningValue)) {
                        if (this.mode === 'Minus') {
                            this.total -= this.runningValue;
                            this.runningValue = 0;
                        } else if (this.mode === 'Plus') {
                            this.total += this.runningValue;
                            this.runningValue = 0;
                        } else if (this.mode === 'Multiply') {
                            this.total *= this.runningValue;
                            this.runningValue = 0;
                        } else if (this.mode === 'Divide') {
                            this.total /= this.runningValue;
                            this.runningValue = 0;
                        } 
                        else {
                            this.total = this.runningValue;
                            this.runningValue = null;
                        }
                    }

                    this.mode = key;

                    this.decimalMode = false;
                    this.multiplier = 10;
                    this.factor = 1;

                    this.sequence = [];
                    this.display = this.total;

                    break;


                case 'Equals':

                    if (this.isNumber(this.runningValue)) {
                        if (this.mode === 'Plus' || this.mode === 'None') {
                            this.total += this.runningValue;
                        } else if (this.mode === 'Minus') {
                            this.total -= this.runningValue;
                        } else if (this.mode === 'Multiply') {
                            this.total *= this.runningValue;
                        } else if (this.mode === 'Divide') {
                            this.total /= this.runningValue;
                        }
                    }
                    this.display = this.total;
                    this.runningValue = null;
                    this.sequence = [];
                    
                    //this.getSequenceFromValue( this.total );

                    this.decimalMode = false;
                    this.multiplier = 10;
                    this.factor = 1;

                    break;


                default:

                    this.display = 'error';
                    break;
            }
        }
    }

}

export default CalcLogic;