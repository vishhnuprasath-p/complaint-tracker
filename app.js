const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const complaintsRouter = require('./routes/complaints');
app.use('/api/complaints', complaintsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running'));