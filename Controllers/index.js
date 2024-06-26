const getProducts = require("./getProducts");
const getProductsCart = require("./GetProductCart");
const addProductCart = require("./AddProductCart");
const putProduct = require("./PutProduct");
const deleteProduct = require("./DeleteProduct");
const getUsersById = require("./GetUsersById");
const register = require("./Register");
const login = require("./Login");
const getColorQ = require("./GetColorQ");
const getTypeQ = require("./GetTypeQ");
const getAccesoriesQ = require("./GetAccesoriesQ");
const logout = require( "./Logout");
const getProductsRanking = require("./GetProductsRanking");

module.exports = {
  getProducts,
  getProductsCart,
  addProductCart,
  putProduct,
  deleteProduct,
  getUsersById,
  register,
  login,
  getColorQ,
  getTypeQ,
  getAccesoriesQ,
  logout,
  getProductsRanking,

};