const apakahterbatas = isFinite(5/10)
console.log(apakahterbatas)

const apakahNaN = isNaN("sepulu"/10)
console.log(apakahNaN)

const apakahparseFloat = parseFloat("7.21")
console.log(apakahparseFloat)

const apakahparseInt = parseInt("7.21")
console.log(apakahparseInt)

function minMax(arrayOfNumbers) {
    let dataMin = arrayOfNumbers[0];
    let dataMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < dataMin) {
            dataMin = value;
        } else if (value > dataMax) {
            dataMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23,-34, 7,121]);

function multiply(num) {
    total = num * num;
}

const result = multiply(3);

console.log(result);