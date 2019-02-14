
// linear search
function isInclude(arr, n) {
   arr = Array.isArray(arr) ? arr : Array.from(arr);
   let ik = arr.find(p=>p == n);

   return ik != null ? true : false;
    /*
        for(var i=0;i<arr.length;i++) {
            if(arr[i] === n) {
                return true;
            }
            else {
                return false;
            }
        }
        */
    
}

let op = [1,2,3,4,5];

console.log(isInclude(op, 5))
console.log(isInclude(op, 14))
//console.log(isInclude("op", 4))