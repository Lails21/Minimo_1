const Student = require('../models/student');
const Subject = require('../models/subject');

const SubjectCtrl = {};

SubjectCtrl.postSubject = async (req, res) => {
    const subject = new Subject(req.body)
    console.log(subject);

    try {
        await subject.save();
        res.status(200).send({message: "Subject created successfully"}, )
    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    }
}

SubjectCtrl.getSubjects = async (req, res) => {
    const allsubjects = await Subject.find();
    res.json(allsubjects);
}

SubjectCtrl.putStudentSubject = async (req, res) => {
    const subjectId = req.body.subjectId;
    const studentId = req.body.studentId;
    console.log(subjectId);
    console.log(studentId);

    let subjectUpdated = await Subject.findOneAndUpdate({_id: subjectId}, {$addToSet: {student: studentId}});
    console.log(subjectUpdated);
    console.log(subjectUpdated);

    

    res.status(200).send({message: "Student added successfully to the subject"})
}

SubjectCtrl.getSubjectDetail = async (req, res) => {
    console.log(req.params.id);
    const subject = await Subject.findById(req.params.id);
    res.json(subject);
}

SubjectCtrl.getStudentSubjectDetail = async (req, res) => {
    try {
        const subjectId = req.params.id1;

        //We use populate to return the detail of every student
        //Populates automatically find every student that has the specified ID, instead of doing by us
        let subject = await Subject.findById(subjectId).populate('student');
        if(!subject){
            return res.status(404).send({message: 'Subject not found'})
        }else{
            res.status(200).send(subject)
        }
    } catch(err) {
        res.status(500).send(err)
    }
}



module.exports = SubjectCtrl;