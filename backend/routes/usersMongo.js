const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');


const getUsers = (req, res) => {
  User.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};



const getUserById = (req, res) => {
  const user_id = req.params.id;
  User.findOne({ _id: user_id }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

//get all users controller func


//this needs to be checked
const updateUser = (req, res) => {
  const {id, password} = req.body;
  //findByIdAndUpdate({"5db6b26730f133b65dbbe459"},{"breed": "Great Dane"}
  User.findByIdAndUpdate({id}, {password:password}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};


//router.post("/", createUser);
router.get("/", getUsers);
router.put("/update", updateUser);
router.get("/:id", getUserById);

module.exports = userRrouter = router;
// export { router as userRoutes };
