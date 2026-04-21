const express = require('express');
const router = express.Router();
const db = require('../db/database');

// GET
router.get('/', (req, res) => {
  db.all("SELECT * FROM complaints", [], (err, rows) => {
    res.json(rows);
  });
});

// POST
router.post('/', (req, res) => {
  const { name, email, category, description } = req.body;

  db.run(
    `INSERT INTO complaints (name, email, category, description) VALUES (?, ?, ?, ?)`,
    [name, email, category, description],
    function (err) {
      res.json({ message: "Complaint Added" });
    }
  );
});

// PATCH
router.patch('/:id/status', (req, res) => {
  db.run(
    `UPDATE complaints SET status=? WHERE id=?`,
    [req.body.status, req.params.id],
    () => res.json({ message: "Updated" })
  );
});

// DELETE
router.delete('/:id', (req, res) => {
  db.run(
    `DELETE FROM complaints WHERE id=?`,
    [req.params.id],
    () => res.json({ message: "Deleted" })
  );
});

module.exports = router;