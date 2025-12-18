console.log("loaded")

const numbers = [12, 45, 67, 23, 89, 34, 56, 78, 90, 12, 45, 100, 200, -5, 150, 34, 67, 89, 12, 50];

let unique = [];

function counter() {
    const suming = numbers.reduce((a, b) => {
        return a + b, 0;
    })
    console.log("sum =", suming);

    const avg = suming / numbers.length;
    console.log("average = ", avg);
}


const filter = numbers.filter((val) => {
    return val > 50;
});

console.log("filtered =", filter);

console.log("maximum value =", Math.max(...numbers));

console.log("minimum value =", Math.min(...numbers));

for (let i = 0; i < numbers.length; i++) {
    if (!unique.includes(numbers[i])) {
        unique.push(numbers[i]);
        console.log(unique);
    }
}

counter();
