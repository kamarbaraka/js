// function definition

let s = {name: 'kamar', age: 23, job: 'developer'};
function valueOf(s){
    for (let v in s)
        console.log(v.concat(' : ', s[v], '\n'));
}

valueOf(s);

// calculate the distance between two cartesian points (x1, y1), (x2, y2)
let p1 = [3, 2], p2 = [5, 4];

function  distance(p1, p2){
    let dx = p2[0] - p1[0], dy = p2[1] - p1[1], dist;
    dist = Math.sqrt((dx*dx) + (dy * dy));
    return dist;
}

console.log(distance(p1, p2));

// a recursive function (one that calls itself) that computes factorials
function factorials(x){
    if (x <= 1)
        return 1;
    let fact;
    fact= x * factorials(x - 1);
    return fact;
}
console.log(factorials(8));

// function expression that squares its arguments
let square;
square = function (x){return Math.pow(x, 2);}

console.log(square(4));

// function expression with a name (as a convenience for recursion) that computes factorials
let fact = function f(x){
    if (x <= 1) return 1;
    return x * f(x -1);
}
console.log(fact(8));

/*function expressions are sometimes defined and immediately invoked. note that they can be used as arguments to
other functions*/
let ans = fact((function (a, b){return a - b;}(16, 8)));
console.log(ans)