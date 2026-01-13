module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    // store redirect URL in session
    req.session.redirectUrl = req.originalUrl;

    req.flash("error", "You must be logged in first!");
    return res.redirect("/login"); // ✅ ALWAYS a string
  }
  next();
};

//when user login passport automatically reset the session thats why we need to make middleware to store redirect
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session && req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};
