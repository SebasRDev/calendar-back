/*
 *Rutas de Events / Events
 * host + /api/events
 */
const express = require("express");
const {
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/events");
const { validateJWT } = require("../middlewares/validate-jwt");

const router = express.Router();

router.use(validateJWT);

router.get("/", getEvent);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;
