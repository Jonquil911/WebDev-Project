import {Component, OnInit} from '@angular/core';
import {COURSE} from '../database/courses';
import {CourseService} from '../services/course.service';
import {LINK} from '../database/links';
import {FILE} from '../database/files';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  logged = false;
  courses: COURSE[];
  file: File = null;
  username;

  constructor(private courseService: CourseService, private http: HttpClient, private router: Router, public loginService: LoginService) {
  }

  ngOnInit(): void {
    this.getCourses();
    const token = localStorage.getItem('token');
    if (token) {
      this.username = this.loginService.getUsername();
    }

  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  showFieldset(id: string) {
    let x;
    x = document.getElementById(id);
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
      x.style.margin = 'auto auto 40px';
    }
  }

  addLink(): void {
    const course = (document.getElementById('courseName') as HTMLInputElement).value.trim();
    const link = (document.getElementById('courseLink') as HTMLInputElement).value.trim();
    const description = (document.getElementById('description') as HTMLInputElement).value.trim();
    const name = (document.getElementById('linkName') as HTMLInputElement).value.trim();

    const request: LINK = {name, link, description, course};
    this.courseService.addLink(request).subscribe(() => alert('link added'));

    (document.getElementById('courseName') as HTMLInputElement).value = null;
    (document.getElementById('courseLink') as HTMLInputElement).value = null;
    (document.getElementById('description') as HTMLInputElement).value = null;
    (document.getElementById('linkName') as HTMLInputElement).value = null;

  }


  onFileSelect(event) {
    this.file = event.target.files[0] as File;
    console.log(this.file);
  }

  addFile(): void {

    const fd = new FormData();
    fd.append('file', this.file, this.file.name);

    const course = (document.getElementById('courseFileName') as HTMLInputElement).value.trim();
    const name = (document.getElementById('linknamee') as HTMLInputElement).value.trim();
    const request: FILE = {name, course, file: this.file};

    this.http.post('http://127.0.0.1:8000/api/files/', request).subscribe(res => {console.log(res); });
    this.courseService.addFile(request).subscribe(() => alert('file added'));
    console.log(this.file);
  }

  logout() {
    this.router.navigate(['login']);
    localStorage.clear();
    this.loginService.updateLogged(false);
    this.logged = false;
  }
}
