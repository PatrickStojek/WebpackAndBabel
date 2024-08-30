
const fn = function(arr, arg1, arg2, arg3,) {
    console.log(
        arr,
        arg1,
        arg2,
        arg3
    )
    return 'abc';
}

const v1 = 111;
const v2 = 222;
const text = fn`Ciąg znaków ${v1} oraz ${v2} i tyle!`;
console.log(text); 
