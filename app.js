const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const complaintsRouter = require('./routes/complaints');
app.use('/api/complaints', complaintsRouter);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));