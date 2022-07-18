/*
 *Rutas de Events / Events
 * host + /api/events
 */
const express = require("express");
const { check } = require("express-validator");
const {
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");
const { validateJWT } = require("../middlewares/validate-jwt");
const { validateFields } = require("../middlewares/validate-fields");

const router = express.Router();

router.use(validateJWT);

router.get("/", getEvent);
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").isDate(),
    check("end", "Fecha de finalizacion es obligatoria").isDate(),
    validateFields
  ],
  createEvent
);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
