const fs = require('fs-extra');
const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  const pageFilePath = path.join(__dirname, '../db/pages', `${req.params.id}.json`);
  fs.readFile(pageFilePath, 'utf8').then(data => res.end(data));
});

module.exports = router;