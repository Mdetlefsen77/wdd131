function calculate(a, b, callback) {
    a = 2
    b = 3
    callback = displayResult
    callback(a+b);
};

displayResult((result) =>{
    console.log('The result is: '+ result)
});