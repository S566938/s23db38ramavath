var horse = require('../models/horse');
// List of all horse
exports.horse_list = async function(req, res) {
    try{
    thehorse = await horse.find();
    res.send(thehorse);
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
    thehorse = await horse.find();
    res.render('horse', { title: 'horse Search Results', results: thehorse });
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



 // Handle horse delete on DELETE.
exports.horse_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await horse.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

  
   // Handle a show one view with id specified by query
exports.horse_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await horse.findById( req.query.id)
    res.render('horsedetail', { title: 'horse Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


   // Handle building the view for creating a horse.
// No body, no in path parameter, no query.
// Does not need to be async
exports.horse_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('horsecreate', { title: 'horse Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };


   
   // Handle building the view for updating a horse.
// query provides the id
exports.horse_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await horse.findById(req.query.id)
    res.render('horseupdate', { title: 'horse Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   }

   // Handle a delete one view with id from query
exports.horse_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await horse.findById(req.query.id)
    res.render('horsedelete', { title: 'horse Delete', toShow: 
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   
    