const userController = require('./user');
const eventController = require('./event');
const tagController = require('./tag');

const apiController = {
    home(req, res) {
    res.send("Welcome on SoNow API homepage !")
    },

};
module.exports = {apiController, userController, eventController, tagController };