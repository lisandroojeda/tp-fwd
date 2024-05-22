const user = require("../Models/Users");
const User = require("../Models/Users");

const getUsersById = async (req, res) => {
  const {userId} = req.params;
  
  if (userId.length === 24){
    User.findById(userId).then((user)=>{
      if(!user){
        return res.json({mensaje:"Usuario no encontrado"})
      }else{
        const {_id,pass,__v,...resto} = user._doc;
        res.json(resto);
      }
    });
  }else{
    res.json({mensaje:"Estas enviando una contraseña incorrecta"});
  }
  }


module.exports = getUsersById;