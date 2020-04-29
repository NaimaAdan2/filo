/*
Util function for checking if a user is logged into the session. Returns a
401 if the user is not logged in
*/
function isLoggedIn(req, res) {
  if (!req.session || !req.session.user) {
    res.sendStatus(401)
  }
}

/*
Util function for checking if a user is logged into the session and is an admin.
Returns a 401 if the user is not logged in and is not an admin
*/
function isAdmin(req, res) {
  if (!req.session || !req.session.user || !req.session.user.isAdmin == true) {
    res.sendStatus(401)
  }
}

module.exports = {isLoggedIn, isAdmin}
