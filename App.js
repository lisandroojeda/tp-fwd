const express = require("express");
const cors = require("cors");
const controllers = require("./Controllers");
const db = require("./DataBase");
const morgan = require("morgan")

const app = express();


app.use(cors()); //mildware de Cors
app.use(express.json()); //mildware de express
app.use(morgan('dev'));


/* GET*/
app.get("/products", controllers.getProducts);
app.get("/products-cart", controllers.getProductsCart);
app.get("/users/:userId",controllers.getUsersById);
//app.get("/products",controllers.getProductsRank); //me devuelve un ranking de productos vendidios ex Q de osos 
app.get("/getColor",controllers.getColorQ); //me devuelve un ranking de colores vendidos ex Q de red
app.get("/getType",controllers.getTypeQ); //me devuelve un ranking de colores vendidos ex Q de red
app.get("/getAccesories",controllers.getAccesoriesQ); //me devielve un ranking de accesorios vendidos ex anteojos
app.get("/productsRanking", controllers.getProductsRanking)
/* POST */
app.post("/products-cart", controllers.addProductCart);
app.post("/register",controllers.register);
/*app.post("/login",controllers.login);
app.post("/logout",controllers.logout);*/
/* PUT*/
app.put("/products-cart/:productId", controllers.putProduct);

/* DELETE */
app.delete("/products-cart/:productId", controllers.deleteProduct);

app.listen(4500, () => {
    console.log("Server funcionando en el puerto 4500");
    db();
  });
  
  module.exports = app;