const getFood = (req, res) => {
  res.json({
    success: true,
    data: null,
    message: 'successfully get data'
  });
};

const postFood = (req, res) => {
  res.json({
    success: true,
    data: null,
    message: 'successfully post data'
  });
};

module.exports = {
  getFood,
  postFood
};
