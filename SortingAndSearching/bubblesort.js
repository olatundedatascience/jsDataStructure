function swap(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function bubbleSort(elm) {
    if(!Array.isArray(elm)) {
        return ;
    }
    else {
        for(var i=0;i<elm.length;i++) {
            for(var j=0;j<=i;j++) {
                if(elm[i] < elm[j]) {
                    swap(elm, i, j)
                }
                
            }
        }
    }
    return elm;
}

function linearSort(elm) {
    if(!Array.isArray(elm)) {
        return;
    }
    else {
        return elm.sort(sortMe);
    }

}

function sortMe(a, b) {
    if( a> b) {
        return 1
    }
    else if(a < b) {
        return -1
    }
    else {
        return 0;
    }
}

function selectionSort(fn) {
    var len = fn.length, min ;
    for(var i=0;i<fn.length;i++) {
        min =i;
        for(var j=0;j<len;j++) {
            if(fn[j] < fn[min]) {
                min =j;
            }
        }

        if(i != min) {
            swap(fn, i, min)
        }
    }

    return fn;
}

console.log(selectionSort([12, 23, 11, 21, 1, 10]))