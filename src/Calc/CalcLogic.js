import * as CALC from './CalcActions'

class CalcLogic {

    //Arrow functions are lexically scoped so we don't have to explicitly bind to 'this'.
    //https://javascriptweblog.wordpress.com/2015/11/02/of-classes-and-arrow-functions-a-cautionary-tale/
    //However using this statically scoped property means it is redefined every time this class
    //is instanced, which in this case is only once so here this is no performance issue.
    //Class properties are an ES7 (proposed?) feature, babel has to be configured to handle this with
    //appropriate transform plugin
    doPressKey = key => {
        console.log(`class property ${key}`);
        return this.pressKey(key);
    }

    constructor() {
        this.display = 0;
        this.runningValue = null;
        this.total = 0;
        this.decimalMode = false;
        this.mode = CALC.NONE;
        this.multiplier = 10;
        this.factor = 1;

        this.sequence = [];

        //Other ways to avoid binding explicitly
        this.doPressKey2 = e => this.pressKey(e);
        this.doPressKey3 = (...args) => this.pressKey(...args);
        //this.pressKey = this.pressKey.bind(this);
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

        if (hasDecimal) {
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
        for (let i = 0; i < this.sequence.length; i++) {
            d = d + `${this.sequence[i]}`;
        }
        return d == '' ? 0 : d;

    }

    getSequenceFromValue(value) {
        let svalue = `${value}`;
        let seq = [];
        for (let i = 0; i < svalue.length; i++) {
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
            this.runningValue = this.getValue();


            if (this.mode === CALC.NONE) {
                this.total = 0;
                this.mode = CALC.PLUS;
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

                case CALC.CLEAR:

                    if (this.isNumber(this.runningValue)) {
                        this.runningValue = null;
                    } else {
                        this.runningValue = 0;
                        this.total = 0;
                        this.mode = CALC.NONE;
                    }

                    this.display = 0;
                    this.sequence = [];

                    this.decimalMode = false;
                    this.multiplier = 10;
                    this.factor = 1;

                    break;


                case CALC.DECIMAL:

                    if (this.runningValue === null) {
                        this.runningValue = 0;
                    }
                    if (this.runningValue === 0) {
                        this.display = '0.';
                    }

                    this.sequence.push('.');

                    this.decimalMode = true;

                    this.multiplier = .1;
                    this.factor = .1;

                    break;


                case CALC.PLUS:
                case CALC.MINUS:
                case CALC.MULTIPLY:
                case CALC.DIVIDE:

                    if (this.isNumber(this.runningValue)) {
                        if (this.mode === CALC.MINUS) {
                            this.total -= this.runningValue;
                            this.runningValue = 0;
                        } else if (this.mode === CALC.PLUS) {
                            this.total += this.runningValue;
                            this.runningValue = 0;
                        } else if (this.mode === CALC.MULTIPLY) {
                            this.total *= this.runningValue;
                            this.runningValue = 0;
                        } else if (this.mode === CALC.DIVIDE) {
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


                case CALC.EQUALS:

                    if (this.isNumber(this.runningValue)) {
                        if (this.mode === CALC.PLUS || this.mode === CALC.NONE) {
                            this.total += this.runningValue;
                        } else if (this.mode === CALC.MINUS) {
                            this.total -= this.runningValue;
                        } else if (this.mode === CALC.MULTIPLY) {
                            this.total *= this.runningValue;
                        } else if (this.mode === CALC.DIVIDE) {
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