const Hoax = require("../models/hoaxs");

exports.getAllHoaxs = async (req, res) => {
  try {
    const result = await Hoax.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Hoaxs found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Hoaxs not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getHoaxById = async (req, res) => {
  try {
    const result = await Hoax.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Hoax found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Hoax not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteHoax = async (req, res) => {
  try {
    const result = await Hoax.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Hoax deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateHoax = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      text: req.body.text,
      date: req.body.date,
    };
    const result = await Hoax.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Hoax updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Hoax was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createHoax = async (req, res) => {
  try {
    const data = new Hoax({
      title: req.body.title,
      text: req.body.text,
      date: req.body.date,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Hoax created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Hoax was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
