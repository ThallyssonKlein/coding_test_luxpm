const { create } = require("apisauce");

const API = create({
    baseURL: "http://encrypt_service:5001"
});

module.exports = (app) => {
    app.get('/encrypt', async (req, res) => {
        const pythonResponse = await API.get("/");
        res.json(pythonResponse.data);
    });
}