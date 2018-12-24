var express = require("express");
var router = express.Router();
var models = require("../models/index");
const Sequelize = require("sequelize");

var Op = Sequelize.Op;

// GET booking list.
router.get("/", function(req, res, next) {
  models.Location.findAll({
    include: [
      {
        model: models.Property,
        include: [
          {
            model: models.Unit,
            include: [
              { model: models.Room, include: [{ model: models.Booking }] }
            ]
          }
        ]
      }
    ]
  }).then(data => res.send(data));
});

// Edit Booking List
router.put("/edit/:id", function(req, res, next) {
  models.Booking.update(req.body, { where: { id: req.params.id } })
    .then(update => res.send(update))
    .catch(err => res.send(err));
});

// Get by Check In
router.get("/checkin/:date", function(req, res, next) {
  console.log(`-----------------------------`);
  console.log(req.query.checkIn);
  console.log(`-----------------------------`);

  models.Location.findAll({
    include: [
      {
        model: models.Property,
        include: [
          {
            model: models.Unit,
            include: [
              {
                model: models.Room,
                include: [
                  {
                    model: models.Booking,
                    where: {
                      checkIn: { [Op.like]: req.params.date + "%" }
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }).then(data => res.send(data));
});

// Get by Check Out
router.get("/checkout/:date", function(req, res, next) {
  console.log(`-----------------------------`);
  console.log(req.params.date);
  console.log(`-----------------------------`);

  models.Location.findAll({
    include: [
      {
        model: models.Property,
        include: [
          {
            model: models.Unit,
            include: [
              {
                model: models.Room,
                include: [
                  {
                    model: models.Booking,
                    where: {
                      checkOut: {
                        [Op.like]: req.params.date + "%"
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }).then(data => res.send(data));
});

// Get by Guest Name
router.get("/search/guest", async function(req, res, next) {
  console.log(`-----------------------------`);
  console.log(req.query.guestName);
  console.log(`-----------------------------`);

  models.Location.findAll({
    include: [
      {
        model: models.Property,
        include: [
          {
            model: models.Unit,
            include: [
              {
                model: models.Room,
                include: [
                  {
                    model: models.Booking,
                    where: {
                      guestName: { [Op.like]: req.query.guestName }
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }).then(data => res.send(data));
});

// Get by Unit
router.get("/search/unit", function(req, res, next) {
  models.Location.findAll({
    include: [
      {
        model: models.Property,
        include: [
          {
            model: models.Unit,
            where: {
              type: { [Op.like]: req.query.type }
            },
            include: [
              {
                model: models.Room,
                include: [
                  {
                    model: models.Booking
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }).then(data => res.send(data));
});

module.exports = router;
