/*
 *Rutas de Usuarios / Auth
 * host + /api/auth
 */

const express = require("express");
const {
  createUser,
  loginUser,
  revalidateToken,
} = require("../controllers/auth");
const router = express.Router();

router.post("/register", createUser);
router.post("/", loginUser);
router.get("/renew", revalidateToken);

module.exports = router;
