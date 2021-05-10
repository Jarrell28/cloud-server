'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.status(200).send('Testing server');
});

app.listen(PORT, () => console.log('server up', PORT));
