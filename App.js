const express = require("express");
const cors = require("cors");
const controllers = require("./Controllers");
const db = require("./DataBase");
const app = express();


app.use(cors()); //mildware de Cors
app.use(express.json()); //mildware de express



/* GET*/
app.get("/products", controllers.getProducts);
app.get("/products-cart", controllers.getProductsCart);
app.get("/users/:userId",controllers.getUsersById);

/* POST */
app.post("/products-cart", controllers.addProductCart);
app.post("/register",controllers.register);
app.post("/login",controllers.login);

/* PUT*/
app.put("/products-cart/:productId", controllers.putProduct);

/* DELETE */
app.delete("/products-cart/", controllers.deleteProduct);

app.listen(4000, () => {
    console.log("Server funcionando en el puerto 4000");
    db();
  });
  
  module.exports = app;