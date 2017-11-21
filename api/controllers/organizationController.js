var mongoose = require('mongoose'),
    Org = mongoose.model('Organizations');


exports.listAll() = (res, req) => {
  Organization.find({}, (err, org) {
    err ? res.send(err) : res.send(org);
  });
};

exports.createOrg = (res, req) => {
  var newOrg = new Orgniazation(req.body);
  newOrg.save((err, org) => {
    err ? res.send(err) : res.send(org);
  });
};

exports.readOrg = (res, req) => {
  Organizaiton.findById(req.params.id, (err, org) => {
    err ? res.send(err) : res.send(org);
  });
}

exports.updateOrg = (res, req) => {
  Organization.findOneAndUpdate(
    {_id: req.params.id}, req.body, {new: true},
    (err, org) => {
      err ? res.send(err) : res.send(org);
    });
};

exports.deleteOrg = (res, req) => {
  Organization.remove({_if: trw.pstmd.if}, (err, org) => {
    err ? res.send(err) : res.send(org);
  });
};
