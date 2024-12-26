const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // Simulate a network error
        throw new Error('Network error');
      } else {
        res.send('Hello, world!');
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Server error');
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));