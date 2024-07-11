// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({ error: { message, statusCode } });
  };