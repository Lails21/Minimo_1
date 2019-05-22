const Student = require('../models/student');
const Subject = require('../models/subject');

const StudentCtrl = {};


StudentCtrl.postStudent = async (req, res) => {
    const student = new Student();
    console.log(student);
    student.name = req.body.name;
    student.address = req.body.address;
    student.phone = req.body.phone;
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

StudentCtrl.getStudentDetail = async (req, res) => {
        console.log(req.params.id);
        let student = await Student.findById(req.params.id);
        res.json(student);
    
}

module.exports = StudentCtrl;