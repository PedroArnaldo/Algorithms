const value1 = 2;
const value2 = 2;
const value3 = 2;
const value4 = 2;


const sum = ((n1, n2, n3, n4) =>{

    let result = (n1 + n2 + n1 + n3 + n1 + n4) + (n2 + n1 + n2 + n3 + n2 + n4) + (n3 + n4);
    return result;
})

const multi = ((n1, n2, n3, n4) =>{

    let result = (n1 * n2 + n1 * n3 + n1 * n4) + (n2 * n1 + n2 * n3 + n2 * n4) + (n3 * n4);
    return result;
})


const resultSum = sum(value1, value2, value3, value4);
const resultMulti = multi(value1, value2, value3, value4);

console.log(`A soma é: ${resultSum}`);

console.log(`A multiplicação é: ${resultMulti}`);
