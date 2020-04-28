function isLoggedIn(req, res) {
  if (!req.session || !req.session.user) {
    res.redirect("/login")
  }
}

function isAdmin(req, res) {
  if (!req.session || !req.session.user || !req.session.user.isAdmin == true) {
    res.sendStatus(401)
  }
}

module.exports = {isLoggedIn, isAdmin}
