const fibonacci = require ('fibonacci');
module.exports = {
    main: function (event, context) {
        let fiboArg = between(parseInt(process.env['FIBONACCI_MIN'],10),parseInt(process.env['FIBONACCI_MAX'],10))
        console.log(`Calculating fibonacci series of ${fiboArg}...`)
        let fiboResult = fibonacci.iterate(fiboArg);
        console.log(`Result: ${fiboArg}`)
        return fiboResult;
    }
}

function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
