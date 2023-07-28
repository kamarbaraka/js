// function that computes the hypotenuse of a right angle triangle. nested function included

function hypotenuse(base, height){
    let square, hyp;
    square = function (x){return Math.pow(x, 2);}
    hyp = Math.sqrt(square(base) + square(height));
    return hyp;
}
let hypo = hypotenuse(3, 4);
console.log(hypo);

// test whether we in strict mode
let strict = function (){return !this;}, print = function (x){console.log(x);};
print(strict());

// method invocation
let triangle = {base: 3, height: 4};
triangle.hyp = function (){
    let square;
    square = function (x){return Math.pow(x, 2);}
    this.result = Math.sqrt(square(this.base) + square(this.height));
    return this.result;
}
triangle.hyp()
print(triangle.result);


