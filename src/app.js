
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

function useHTML(str, val) {
    return `${str[0]} <b>${val}</b> ${str[1]}`
}

function useMarkDown(str, val) {
    return `${str[0]} *${val}* ${str[1]}`
}

const name = "Lukasz";

console.log(useHTML`Super programista ten ${name}!`, useMarkDown`Super programista ten ${name}`)

const calcSum = (...nums) => {
    return nums.reduce((acc, curr) => acc + curr, 0)
}

console.log(calcSum(1,2,3,4,5))