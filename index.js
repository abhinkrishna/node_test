const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        status: 200,
        statusMessage: 'OK',
        message: 'Server running successfully.'
    });
})

app.listen(4000, () => console.log('server running on port 4000'));