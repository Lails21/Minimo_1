import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  selectedStudent: Student;
  students: Student[];
  readonly URL_API = 'http://localhost:3000/student';

  constructor(private http: HttpClient) {
    this.selectedStudent = new Student;
   }

  postStudent (Student: Student):Observable<Student>{
    return this.http.post<Student>(this.URL_API, Student);
  }
}
