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
    // Handle horse create on POST.
exports.horse_create_post = async function(req, res) {
    console.log(req.body)
    let document = new horse();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"horse_type":"goat", "cost":12, "size":"large"}
    document.horse_color = req.body.horse_color;
    document.horse_breed = req.body.horse_breed;
    document.horse_price = req.body.horse_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific horse.
exports.horse_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await horse.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    