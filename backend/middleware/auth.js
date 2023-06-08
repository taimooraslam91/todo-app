const { verifyToken } = require('../utils/helper');

exports.authenticateUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    // Verify the token
    const decoded = verifyToken(token);

    // Attach the user ID to the request object
    console.log('decoded.userId', decoded.userId);
    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.error('Error authenticating user:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};
