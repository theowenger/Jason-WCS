const express = require('express');
const router = express.Router();

const argonauteCtrl = require('../controllers/argonaute.js');

router.post('/', argonauteCtrl.create);
router.get('/', argonauteCtrl.getAllArgonautes);

module.exports = router;