import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'src/app/models/subject';

@Component({
  selector: 'app-detailsubject',
  templateUrl: './detailsubject.component.html',
  styleUrls: ['./detailsubject.component.css']
})
export class DetailsubjectComponent implements OnInit {

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
    this.getSubjectDetail(this.subject._id);
  }

 

  getSubjectDetail(_id: string){
    this.subjectService.getSubjectDetail(_id)
    .subscribe(res =>{
      this.subject = res;
      console.log(res);
      console.log(_id); 
      console.log(this.subject);
    });
  }

}
