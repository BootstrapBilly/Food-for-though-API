//!Imports
//Core node

//Custom
const mainController = require("../controllers/mainController");

//External

//=Controller functions

exports.getSlash = (req, res) => {

    res.render("slash", 
    {
        pageTitle: "Home",
        path: "/home",
        isLoggedIn: req.session.isLoggedIn

    });
    
}