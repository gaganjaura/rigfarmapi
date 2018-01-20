/**
 * CustomersController
 *
 * @description :: Server-side logic for managing Customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	findByMobile : function(req, res){
        Customers.find({mobile:req.param('mobileNumber')})
        .populate('address_info')
        .exec(function(error, result){
            return res.json(result);
        });
        
    },
    findByName : function(req, res){
        Customers.find({first_name:'%' + req.param('firstName') + '%'})
        .populate('address_info')
        .exec(function(error, result){
            return res.json(result);
        });
    }
};

