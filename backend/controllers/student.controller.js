const Student = require('../models/student');
const Subject = require('../models/subject');

const StudentCtrl = {};


StudentCtrl.postStudent = async (req, res) => {
    const student = new Student(req.body);
    console.log(student);

    try {
        await student.save();
        res.status(200).send({message: "Student created successfully"})
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
}

StudentCtrl.getStudents = async (req, res) => {
    const allstudents = await Student.find();
    res.json(allstudents);
}

module.exports = StudentCtrl;