const { Router } = require("express");
const constrollerLogin = require("../controller/login");

const router = new Router();

router.post("/", constrollerLogin.loginAsMahasiswa);
router.get("/mahasiswa", constrollerLogin.accessResources);

module.exports = router;
