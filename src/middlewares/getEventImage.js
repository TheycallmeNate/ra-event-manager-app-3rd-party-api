const axios = require("axios");

exports.getEventImage = async (req, res, next) => {
  const image = await axios
    .get(`https://imagegen.herokuapp.com/?category=${req.body.category}`)
    .then((response) => response.data);
  if (image.status === false) {
    req.body.image = "Auto image gen failed. Need to manually input image link";
    next();
  }
  req.body.image = image.image;
  next();
};
