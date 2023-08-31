const multer = require('multer')
const upload = multer();

app.post("/uploads", upload.single('img'), async (req, res) => {
  const user_obj = new User({
    img: req.file.buffer
  });

  await user_obj.save();
  res.json(user_obj);
});