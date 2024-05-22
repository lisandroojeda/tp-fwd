const bcrypt = require("bcrypt")
const Users = require("../Models/Users")



const register = async (req,res) => {
    const {name,email,pass} =req.body

    Users.findOne({email}).then((user)=> {
        if(user){ // si el usuario existe 
            return res.json({mensaje: "Email ya registrado en nuestro sistema"}) 
        }else if(!name || !email || !pass){ //si algún campo no esta completo informo y aborto
            return res.json({mensaje:"Falta completar un campo"})
        }else {
            bcrypt.hash(pass,10,(error,passHash) =>{ //hasheo la contraseña 
                if (error){
                    res.json(error)
                }else {  //creo el nuevo usuario
                    const newUser = new Users ({
                        name,
                        email,
                        pass : passHash,
                    })
                    newUser.save()
                    .then((user)=>{
                        res.json({mensaje:"Usuario creado correctamente",user}) //crea el usuario y lo devuelve
                    })
                    .catch((error) => console.error(error)) // capturamos en caso que exista el error y lo mandamos al console.log
                }
            });
        }
});
}

module.exports = register