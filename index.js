const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/api', (req, res) => {
    res.json({
        status: 200,
        statusMessage: 'OK',
        message: 'server running successfully'
    });
})

app.listen(4000, () => console.log('server running on port 4000'));