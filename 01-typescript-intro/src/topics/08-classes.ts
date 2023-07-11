export class Person {


    constructor(
        public name:string,
        private address:string = 'No Address'){
    }

}

const ironman = new Person('IronMan','New York');
console.log(ironman);
