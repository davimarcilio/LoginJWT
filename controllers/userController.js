const userController = {
    register: function (req, res) {
        res.send('register');
    },
    login: function () {
        res.send('login');
    }
}
module.exports = userController;