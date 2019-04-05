import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { NgForm } from '@angular/forms';
import { Subject } from 'src/app/models/subject';

declare var M: any;

@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
  }

  postSubject(form: NgForm){
    if (form.value._id){
      this.subjectService.postSubject(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Updated succesfuly'});
        // this.getSubjects();
      })
    }
    else{
      this.subjectService.postSubject(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Saved succesfuly'});
        // this.getSubjects();
    });
    } 
  }

  resetForm(form?: NgForm){
    if (form)
      form.reset();
      this.subjectService.selectedSubject = new Subject;
  }

}
