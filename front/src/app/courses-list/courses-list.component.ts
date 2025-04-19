import {Component, OnInit} from '@angular/core';
import {COURSE} from '../database/courses';
import {CourseService} from '../services/course.service';
import {USER} from '../database/user_hello';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: COURSE[];

  constructor(private courseService: CourseService) {
  }

  user: any;

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

}
