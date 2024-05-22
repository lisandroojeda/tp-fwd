const Cart = require("../Models/Cart");

const getProductCart = async(req,res) => {
    const productsCart = await Cart.find();

    if (productsCart){
        res.json({productsCart})
    }else {
        res.json({mensaje: "No hay productos en el carrito"})
    }
}

module.exports = getProductCart;