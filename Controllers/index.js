const getProducts = require("./getProducts");
const getProductsCart = require("./GetProductCart");
const addProductCart = require("./addProductCart");
const putProduct = require("./PutProduct");
const deleteProduct = require("./DeleteProduct");
const getUsersById = require("./GetUsersById");
const register = require("./Register");
const login = require("./Login");


module.exports = {
  getProducts,
  getProductsCart,
  addProductCart,
  putProduct,
  deleteProduct,
  getUsersById,
  register,
  login,
};