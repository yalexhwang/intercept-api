module.exports = (app) => {
  var orgCtrl = require('../controllers/organizationController');
};

app.route('/organizations')
  .get(orgCtrl.listAll)
  .post(orgCtrl.createOrg);

app.route('/organizations/:orgID')
  .get(orgCtrl.readOrg)
  .put(orgCtrl.updateOrg)
  .delete(orgCtrl.deleteOrg);
