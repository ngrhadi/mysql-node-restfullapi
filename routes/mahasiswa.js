const { Router } = require("express");
const router = new Router();
const controller = require("../controller/mahasiswa");

router.get("/", controller.getMahasiswa);
router.get("/:id", controller.getMahsiswaById);
router.get("/role/:role", controller.getRoleMahasiswa);
router.put("/:id", controller.updateMahasiswa);
router.post("/", controller.addMahasiswa);
router.delete("/:id", controller.deleteMahasiswa);

module.exports = router;
