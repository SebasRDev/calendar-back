const { response } = require("express");

const getEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: "gerEvent",
  });
};

const createEvent = (req, res = response) => {
  //verificar que tenga el evento
  console.log( req.body );

  res.json({
    ok: true,
    msg: "CreateEvent",
  });
};

const updateEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: "updateEvent",
  });
};

const deleteEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: "deleteEvent",
  });
};

module.exports = {
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};
