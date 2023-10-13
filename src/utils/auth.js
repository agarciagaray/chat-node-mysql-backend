const bcrypt = require('bcryptjs');

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);  //returns a promise
}

function getFilePath(file) {
    const path = file.path.split('\\');
    const fileName = path.pop();
    const folder = path.pop();
    return `${folder}/${fileName}`;

}
module.exports = {
    hashPassword,
    getFilePath
};