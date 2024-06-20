

function exampleFunction() {
    try {
        // Try to execute this code
        let value = riskyOperation(); // replace this with the operation that might throw an error
    } catch (error) {
        // If an error is thrown in the try block, catch it and execute this code
        console.error('An error occurred:', error);
    } finally {
        // This code will be executed whether an error was thrown or not
        console.log('The try/catch block has finished executing.');
    }

    console.log('This is the end of the function.');
}

function riskyOperation() {
    // This is a placeholder for your operation that might throw an error
    // For the sake of example, we're just going to throw an error right away
    throw new Error('This is an example error.');
}

// Call the function to see try, catch, and finally in action
exampleFunction();