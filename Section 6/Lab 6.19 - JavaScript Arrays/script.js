function divideArray(numbers) {
    let even = [];
    let odd = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            even.push(numbers[i]);
        }
        else {
            odd.push(numbers[i]);
        }
    }
    
    even.sort(function(a,b){
        return a-b;
    });
    odd.sort(function(a,b){
        return a-b;
    });

    console.log("Even numbers:");
    if (even.length === 0) {
        console.log("None");
    }
    else {
        for (let i = 0; i < even.length; i++) {
            console.log(even[i]);
        }    
    }

    console.log("Odd numbers:");
    if (odd.length === 0) {
        console.log("None");
    }
    else {
        for (let i = 0; i < odd.length; i++) {
            console.log(odd[i]);
        }
    }
}