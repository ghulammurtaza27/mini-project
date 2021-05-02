const Users = require("../models/UserModel.js");
const express = require('express');
const app = express();

module.exports = () => {
  
  const getUsers = (req, res) => {
    Users.find({}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  };
  
  
  
  const getUserById = (req, res) => {
    const user_id = req.params.id;
    Users.findOne({ _id: user_id }, (err, data) => {
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
    Users.findByIdAndUpdate({id}, {password:password}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  };
  
  return {
      getUsers,
      updateUser,
      getUserById
  };
};

