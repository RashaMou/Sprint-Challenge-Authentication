const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // installed this

const Users = require("../users/users-model");

router.get("/users", async (req, res) => {
  let allUsers = await Users.find();
  try {
    if (allUsers) {
      res.status(200).json(allUsers);
    } else {
      res.status(404).json("No users to retrieve");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      console.log("saved", saved);
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json("incorrect");
    });
});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
