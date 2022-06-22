const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.index);
router.get("/cart", mainController.cart);
router.get("/details", mainController.details);
router.get("/register", mainController.register);
router.get("/login", mainController.login);

module.exports = router;
