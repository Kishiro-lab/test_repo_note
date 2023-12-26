const sampleFunc = () => {
    return 20;
}

const a = undefined && sampleFunc();

console.log(a);