/*
 *Rutas de Usuarios / Auth
 * host + /api/auth
 */

const express = require("express");
const { check } = require("express-validator");
const {
  createUser,
  loginUser,
  revalidateToken,
} = require("../controllers/auth");
const { validateFields } = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-jwt");

const router = express.Router();

router.post(
  "/register",
  [
    //middlewares
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El pasword debe ser de minimo 6 caracteres").isLength({
      min: 6,
    }),
    validateFields,
  ],
  createUser
);
router.post(
  "/",
  [
    //middlewares
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El pasword debe ser de minimo 6 caracteres").isLength({
      min: 6,
    }),
    validateFields,
  ],
  loginUser
);

router.get("/renew", validateJWT, revalidateToken);

module.exports = router;
