const db = require('../config/sequelize');
const Encrypt = db.encrypt;

const { create } = require("apisauce");

const API = create({
    baseURL: "http://encrypt_service:5001"
});

module.exports = (app) => {
    app.get('/encrypt', async (req, res) => {
        console.log("Entrouuuu->>>>>>>>>>>>");
        const pythonResponse = await API.get("/");
        console.log(process.env.ENV);
        for (let character of pythonResponse.data.message) {
             Encrypt.create({
                character
             });
        }
        res.json(pythonResponse.data);
    });
}