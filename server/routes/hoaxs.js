var express = require("express");
var router = express.Router();

const hoaxsController = require("../controllers/hoaxs");

router.get("/", hoaxsController.getAllHoaxs);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", hoaxsController.getHoaxById);

router.delete("/:id", hoaxsController.deleteHoax);

router.put("/:id", hoaxsController.updateHoax);

router.post("/", hoaxsController.createHoax);

module.exports = router;
