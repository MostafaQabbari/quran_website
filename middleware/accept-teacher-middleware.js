const Teacher = require('../models/teachers');

function acceptTeacher(req, res, next) {
  const id = req.params.id;
  Teacher.findByIdAndUpdate(id, { isTeacher: true })
    .then(() => {
      res.status(200).json({ message: 'Teacher accepted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}

module.exports = acceptTeacher;