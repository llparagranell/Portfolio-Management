const express = require('express');
const { getPost } = require('../controlers/communityController');
const router = express.Router();
const community = require("../models/community");

const multer = require('multer')



router.get('/getPost', getPost)
const upload = multer()

router.post("/uploads", upload.single('img'), async (req, res) => {
  const user_obj = new community({
    name:req.body.name,
    text:req.body.text,
    img: req.file.buffer,
    UniqueKey:req.body.UniqueKey
  });

  await user_obj.save();
  res.json(user_obj);
});

module.exports = router;