// demonstration of set operation in javascript...

// to create a Set..
function CreateSet(element) {
    var ak = new Set();
    if(!Array.isArray(element)) {
        return;
    }
    else {

    }
    for(var i=0;i<element.length;i++) {
        ak.add(element[i])
    }
    return ak;
}

function intersection(SetA, SetB) {
    var intersect = new Set();
    for(let item of SetA) {
        if(SetB.has(item)) {
            intersect.add(item)
        }
    }

    return intersect;
}

function makeArrayUnique(arr) {
    var inj = new Set(arr);

    return inj;
}

let op = [1,2,3,4,5];
let seta = new Set(op);
let ok = [2,3,10,101];
let setb = new Set(ok);
//console.log(intersection(seta, setb))
console.log(makeArrayUnique(op.concat(ok)))