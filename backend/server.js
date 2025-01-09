const express = require('express');
const cors = require('cors');
const ipRoutes = require('./routes/ipRoutes');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/ip', ipRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});