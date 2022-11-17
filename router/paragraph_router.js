const paragraph = require('../controller/paragraph_controller')
const Express = require('express')
const SpellCorrector = require('spelling-corrector');
const router = Express.Router()

router.post('/review',paragraph.spellcheck)

module.exports = router