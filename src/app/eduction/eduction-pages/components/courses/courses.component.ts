import { Component, OnInit, EventEmitter } from '@angular/core';
import { CoursesService } from '../../services/eduction.services';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Filter } from '../../model/filter.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent implements OnInit {

  isOpen!: boolean;
 
  courseList: any[]=[]
tempCoursesList:any[]=[]
  constructor(
    private courseService: CoursesService, private fb: FormBuilder
  ) { }
  openFilter() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit(): void {
    if (window.innerWidth > 768) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
 
    this.getAllCourses()
  }
  getAllCourses() {
    this.courseService.getCourses().subscribe(data => {
      this.courseList = data
    this.tempCoursesList=this.courseList
    });
  }

  changeFilterValue(filterValues:Filter[]) {
    this.tempCoursesList=this.courseList
  filterValues.forEach(filter => {
    if(filter.isCategory){
      this.tempCoursesList.filter(element => {element.CourseCategory== filter.filterName});

    }
    else{
      this.tempCoursesList.filter(element => {});

    }
  });


  }
}
