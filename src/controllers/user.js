const User = require('../models/user');

module.exports = {
    index: (req, res) => {
        User.get(req.con, (error, rows) => {

            if (error) {
                console.log(error)
                res.status(500).send({ response: 'Ha ocurrido un error listado los usuarios ' })
            } else {
                res.status(200).send({ response: rows });
            }
        });
    }
}