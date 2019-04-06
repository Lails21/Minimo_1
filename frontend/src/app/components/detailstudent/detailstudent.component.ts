import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { Subject } from 'src/app/models/subject';
import { ActivatedRoute } from '@angular/router';

declare var M: any;

@Component({
  selector: 'app-detailstudent',
  templateUrl: './detailstudent.component.html',
  styleUrls: ['./detailstudent.component.css']
})
export class DetailstudentComponent implements OnInit {

  subject: Subject;

  constructor(private activatedRouter: ActivatedRoute, private subjectService: SubjectService) {
    this.subject = new Subject();
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
  }

  getStudentSubjectDetail(_id: string){
    this.subjectService.getStudentSubjectDetail(_id)
    .subscribe(res =>{
      this.subject = res;
      console.log(res);
      console.log(_id); 
      console.log(this.subject);
    });
  }

}
