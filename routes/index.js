/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
    title: 'HTML5 ✰ Boilerplate', 
    description: 'Description',
    author: 'Author'
  });
};