
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

const arr = [1,2,3];

const calcSum2 = function(a,b,c) {
    return a + b + c
}

console.log(calcSum(...arr))

const arr2 = [111,242,12,675,45,95,24,72,75]
console.log(
    Math.max(...arr2)
)


const assignPrice = (name, ...products) => {
    let price = 0;
    products.forEach(item => {
        price += item.price
    })
    return {
        name,
        price:price,
        products:products.map(product =>  product.name),
    }
}

console.log(assignPrice(
    "Łukasz Nowak",
    {name: 'Karty', price: 20},
    {name: 'książka', price: 49},
    )
)

const obj = {firstName: 'Łukasz'}
const {firstName, age = '12'} = obj
console.log(firstName, age)


const place = {
    name: {
        pl: "Kraków",
        la: "Cracovia",
        de: "Krakau"
    },
    postition: [50.061389, 19.938333],
}

const {
    name: {en = 'Cracow'},
    postition: [lat = 0, lng = 0]
} = place

console.log(`${en} => ${lat} ${lng} `)