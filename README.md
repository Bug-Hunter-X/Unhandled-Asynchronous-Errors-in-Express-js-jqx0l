# Unhandled Asynchronous Errors in Express.js

This repository demonstrates a common error in Node.js Express.js applications: improper handling of asynchronous errors within request handlers.  The example code simulates an asynchronous operation (network request, database query, etc.) that might fail.  Without proper error handling, these failures can lead to unexpected application behavior, including silent failures or crashes.

## The Bug

The `bug.js` file contains an Express.js server with a route that simulates an asynchronous operation that might throw an error. If the simulated operation fails (randomNumber < 0.5), it sends a 500 error. However, because it doesn't explicitly handle any error conditions, these errors cause unhandled promise rejection warnings, which can be detrimental in a production environment.

## The Solution

The `bugSolution.js` file demonstrates how to correctly handle the asynchronous operation with a `try...catch` block, ensuring that potential errors are gracefully managed and won't lead to unhandled rejections.