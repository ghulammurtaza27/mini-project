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

const createUser = async (req, res) => {
  const userInfo = req.body;

  User.create(userInfo, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
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
  const {_id, password} = req.body;
  //findByIdAndUpdate({"5db6b26730f133b65dbbe459"},{"breed": "Great Dane"}
  User.findByIdAndUpdate({_id}, {password:password}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
      console.log(data);
    }
  });
};


//router.post("/", createUser);
router.get("/", getUsers);
router.put("/update", updateUser);
router.get("/:id", getUserById);
router.post("/", createUser);

module.exports = userRouter = router;
// export { router as userRoutes };
