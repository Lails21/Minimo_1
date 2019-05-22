import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { StudentService } from '../../services/student.service';
import { Subject } from 'src/app/models/subject';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-detailstudent',
  templateUrl: './detailstudent.component.html',
  styleUrls: ['./detailstudent.component.css']
})
export class DetailstudentComponent implements OnInit {

  subject: Subject;
  studentsList: Student[] = [];
  studentId: string;
  subjectId: string;

  constructor(private activatedRouter: ActivatedRoute, private subjectService: SubjectService, private studentService: StudentService) {
    this.subject = new Subject();
    this.subjectId = "";
   }


  ngOnInit() {
    this.activatedRouter.params.subscribe(params =>{
      if (typeof params ['id'] !== 'undefined'){
        this.subject._id = params['id'];
      }
      else{
        this.subject._id = '';
      }
    });
    this.getStudentSubjectDetail(this.subject._id);
    this.getStudents();
  }

  getStudentSubjectDetail(_id: string){
    this.subjectService.getStudentSubjectDetail(_id)
    .subscribe(res =>{
      this.subject = res;
      console.log(res);
      console.log(_id); 
      console.log(this.subject);
    });
    this.subjectId = _id;
  }

  getStudents(){
    this.studentService.getStudents()
      .subscribe(res => {
        this.studentsList= res;
        console.log("Hola");
        console.log(res);
      });
  }

  putStudentSubject(form: NgForm){
    this.studentId = form.value._id;
    console.log("Subject" + this.subjectId);
    console.log("Student" + this.studentId);

    this.subjectService.putStudentSubject(this.subjectId, this.studentId)
    .subscribe(res => {
      M.toast({html: 'Student guardado'});
      //this.getStudent();
      this.getStudentSubjectDetail(this.subjectId);
      form.reset();
    });
  
  }




}
