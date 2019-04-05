import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { Subject } from 'src/app/models/subject';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  subjectsList: Subject[] = [];
  constructor(private subjectService: SubjectService) { }

  ngOnInit() {

    this.getSubjects();
  }

  getSubjects(){
    this.subjectService.getSubjects()
    .subscribe(res =>{
      this.subjectsList = res; 
      console.log(res);
    });
  }

  
  

}
