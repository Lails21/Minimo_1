const express = require ('express');
const router = express.Router();
const subjectCtrl = require('../controllers/subject.controller');
const studentCtrl = require('../controllers/student.controller');

router.post('/subjects', subjectCtrl.postSubject);
router.get('/subjects', subjectCtrl.getSubjects);
router.put('/subjects', subjectCtrl.putStudentSubject);
router.get('/subjects/:id', subjectCtrl.getSubjectDetail);
router.get('/subjects/studentdetail/:id', subjectCtrl.getStudentSubjectDetail);

router.post('/student', studentCtrl.postStudent);
router.get('/student', studentCtrl.getStudents);

module.exports = router;