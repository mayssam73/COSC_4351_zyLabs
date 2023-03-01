function calcWordFrequencies() {
    let input = prompt("Enter array of words");
    const inputArray = input.split(" ");
    const frequency = {};

    for (let i = 0; i < inputArray.length; i++) {
        if (frequency[inputArray[i]]) {
            frequency[inputArray[i]] += 1;
        }
        else {
            frequency[inputArray[i]] = 1;
        }
    }

    for (let i = 0; i < inputArray.length; i++) {
        console.log(inputArray[i] + " " + frequency[inputArray[i]]);
    }
}