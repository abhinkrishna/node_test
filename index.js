const express = require('express');
const app = express();
const PORT = 3000

app.use(express.static('public'));

app.get('/api', (req, res) => {
    res.json({
        status: 200,
        statusMessage: 'OK',
        message: 'server running successfully'
    });
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`));