var horse = require('../models/horse');
// List of all horses
exports.horse_list = async function(req, res) {
    try{
    thehorses = await horse.find();
    res.send(thehorses);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// for a specific horse.
exports.horse_detail = function(req, res) {
res.send('NOT IMPLEMENTED: horse detail: ' + req.params.id);
};
// Handle horse create on POST.
exports.horse_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: horse create POST');
};
// Handle horse delete form on DELETE.
exports.horse_delete = function(req, res) {
res.send('NOT IMPLEMENTED: horse delete DELETE ' + req.params.id);
};
// Handle horse update form on PUT.
exports.horse_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: horse update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.horse_view_all_Page = async function(req, res) {
    try{
    thehorses = await horse.find();
    res.render('horse', { title: 'horse Search Results', results: thehorses });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };