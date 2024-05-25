export const ErrorHandler = (err, req, res, next) => {
  const statuscode = res.statuscode === 200 ? 500 : res.statuscode;

  return res.status(statuscode).json({
    success: true,
    error: err.message,
  });
};
