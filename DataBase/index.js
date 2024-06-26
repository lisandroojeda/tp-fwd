const mongoose = require("mongoose") //incorporo mongoose

const MONTO_URL = "mongodb://localhost:27017/Tienda";

const db = async () => {

    await mongoose
        .connect(MONTO_URL)
        .then(()=>console.log(">>DB FUNCIONANDO"))
        .catch((error) => console.error(error))
}

module.exports = db