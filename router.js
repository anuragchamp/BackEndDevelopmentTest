const loginController = require("./controller/controller");

module.exports = function (app) {
    app.use("/user", loginController)
}