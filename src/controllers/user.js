const User = require('../models/user');
const { getFilePath } = require('../utils/auth');

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
    },

    store: (req, res) => {
        req.body.img = '';
        if (req.files.img) {
            req.body.img = getFilePath(req.files.img);
        }

        User.create(req.con, req.body, (error, row) => {
            if (error) {
                console.log(error)
                res.status(500).send({ response: 'Ha ocurrido un error creando el usuario ' })
            } else {
                res.status(200).send({ response: row });
            }
        });
    }
}