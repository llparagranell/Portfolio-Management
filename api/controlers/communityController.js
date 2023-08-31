const community = require("../models/community");

exports.getPost = (req, res) => {
  try {
    community
      .find({})
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.status(408).json({ error });
      });
  } catch (error) {
    res.json({ error });
  }
};

