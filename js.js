function hi(name){

    console.warn(name)

}

hi('kamar')

let person = function(_name, age, job){
    this._name = _name
    this.age = age
    this.job = job

    return 'my name is ' + this._name + ' i am ' + this.age + ' years old' + ' working as a ' + this.job
}

console.log(person('kamar', 23, 'dev'))

let Person = {'_name': 'kamar', 'age': 23, 'job': 'dev'}

Person.gender = 'male'
console.log(Person.job, Person.gender)

console.log(Person)

n = 'kamar'; a = 23; console.log(n, a)

const pi
    =
    3.14
console.log(pi)

function sum(n1, n2){
    let res; res = n1 + n2;
    return res;
}

console.log(sum(3, 5).toString())
;['x', 'x+1', 'x+2'].forEach(console.log);

const then = new Date(2018, 11, 28);
let now = new Date();
let timeLapsed = now - then;
let num = 'my name is kamar baraka\
 i live in gongoni\n\
 i love food'

console.log(num);
