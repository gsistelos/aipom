const { Router } = require("express");

const User = require("../models/User");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = req.query ? await User.find(req.query) : await User.find();

    if (users.length === 0) {
      return res.status(404).send({
        message: "No users found",
      });
    }

    res.status(200).send(users);
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);

    const err = user.validateSync();

    if (err) {
      return res.status(400).send({
        message: err.message,
      });
    }

    await user.save();

    res.status(201).send(user);
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const info = await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );

    if (info.modifiedCount === 0) {
      return res.status(304).end();
    }

    await User.updateOne(
      { _id: req.params.id },
      { $currentDate: { updatedAt: true } }
    );

    res.status(200).send({
      message: "User updated",
    });
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const info = await User.deleteOne({ _id: req.params.id });

    if (info.deletedCount === 0) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    res.status(200).send({
      message: "User deleted",
    });
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
});

module.exports = router;
