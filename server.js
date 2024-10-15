const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve db.json
app.get('/db.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'db.json'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
