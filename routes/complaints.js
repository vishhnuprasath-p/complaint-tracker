const express = require('express');
const router = express.Router();
const db = require('../db/database');

router.get('/', (req, res) => {
  const data = db.prepare('SELECT * FROM complaints').all();
  res.json(data);
});

router.post('/', (req, res) => {
  const { name, email, category, description } = req.body;

  const stmt = db.prepare(
    'INSERT INTO complaints (name, email, category, description) VALUES (?, ?, ?, ?)'
  );
  stmt.run(name, email, category, description);

  res.json({ message: "Complaint Added" });
});

module.exports = router;