import { Component, OnInit } from '@angular/core';
import {FILE} from '../database/files';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../services/course.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-file-pdf',
  templateUrl: './file-pdf.component.html',
  styleUrls: ['./file-pdf.component.css']
})
export class FilePDFComponent implements OnInit {
  file;

  constructor(private route: ActivatedRoute,
              private courseService: CourseService,
              private location: Location) { }

  ngOnInit(): void {
    // this.getFile();
  }

  // getFile(): void {
  //   this.route.paramMap.subscribe(params => {
  //     this.file = files[+params.get('id')];
  //   });
  // }

  goBack(): void {
    this.location.back();
  }
}
