const error = (err, _req, res, _next) => {
  res.status(500).json({
    message: 'Internal Server Error',
    error: err,
  });
};

module.exports = error;