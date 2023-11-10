var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var horse_controller = require('../controllers/horse');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// horse ROUTES ///
// POST request for creating a horse.
router.post('/horses', horse_controller.horse_create_post);
// DELETE request to delete horse.
router.delete('/horses/:id', horse_controller.horse_delete);
// PUT request to update horse.
router.put('/horses/:id', horse_controller.horse_update_put);
// GET request for one horse.
router.get('/horses/:id', horse_controller.horse_detail);
// GET request for list of all horse items.
router.get('/horses', horse_controller.horse_list);
module.exports = router;

// Handle horse update form on PUT.
exports.horse_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await horse.findById( req.params.id)
// Do updates of properties
if(req.body.horse_color)
toUpdate.horse_color = req.body.horse_color;
if(req.body.horse_breed) toUpdate.horse_breed = req.body.horse_breed;
if(req.body.horse_price) toUpdate.horse_price = req.body.horse_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};