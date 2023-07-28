let myName:String = 'kamar';
let myAge:number = 23;

console.log('my name is ', myName, ' am ', myAge, " years old");

class Person {
    private _myName:String;
    private _myJob:String;

    constructor(name:String, job:String){
        this._myJob = job;
        this._myName = name;
    }


    get myName(): String {
        return this._myName;
    }

    set myName(value: String) {
        this._myName = value;
    }

    get myJob(): String {
        return this._myJob;
    }

    set myJob(value: String) {
        this._myJob = value;
    }
}

let me:Person = new Person('kamar', 'developer')
console.log(me.myName);

let doc = 'index.html';

let you:Person= new Person('elijah', 'reader');

console.log('my name is ', you.myName, ' am a ', you.myJob);

function test(){

    let paragraph = document.createElement('p');
    paragraph.textContent = 'hello everybody';
    document.appendChild(paragraph);
}