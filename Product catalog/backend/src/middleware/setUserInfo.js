// Example middleware that sets req.info
const setUserInfo = (req, res, next) => {
    // Set req.info based on authentication logic or wherever the user info is stored
    req.info = {
      roles: ['admin'], // Replace with the actual roles information
      // Other user information...
    };
    next();
  };
  
  export default setUserInfo;
  