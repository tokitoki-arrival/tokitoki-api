var express = require("express");
var router = express.Router();
var models = require("../models/index");

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

//

module.exports = router;
