const { jwtAuth } = require("../middleware");
const productServices = require("../services/product-services.js");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  // add a product 
  app.post("/api/auth/addproduct", [jwtAuth.verifyToken], productServices.create);

  // find all product
  app.get("/api/auth/getproducts", [jwtAuth.verifyToken], productServices.findAll);

  // find product by product id
  app.post("/api/auth/getproductbyid", [jwtAuth.verifyToken], productServices.findOne);

  // update product by product id
  app.post("/api/auth/update", [jwtAuth.verifyToken], productServices.update);

  // delete productby product id
  app.post("/api/auth/delete", [jwtAuth.verifyToken], productServices.delete);

};