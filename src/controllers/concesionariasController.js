const db = require("../database");
 

module.exports = {
    index: (req,res) => {
        let nombreDeConcesionarias = db.map(concesionaria => concesionaria.sucursal)
        return res.send(nombreDeConcesionarias)
    },
    sucursales: (req,res) => {
        let concesionarias = db.map(concesionaria => {
            return {
                sucursal: concesionaria.sucursal,
                telefono: concesionaria.telefono,
                direccion: concesionaria.direccion,
            }
        })

        return res.send(concesionarias)

    },

    sucursal: (req,res) => {
            const nombreDeSucursal = req.params.sucursal.toLowerCase().trim();

            const sucursal = db.find(
                concesionaria =>
                 concesionaria.sucursal.toLowerCase() === nombreDeSucursal);

                 if(typeof sucursal === "undefined") {
                    return res.send("Sucursal inexistente")
                 }

                 return res.send(sucursal);
    },
}
