const calculateSum = (...args) => {
    return args.reduce((acc, curr) => {
        return acc + curr
    },0)
}
const getMax = (...args) => {
    return Math.max(...args);
}
module.exports =  {calculateSum, getMax}