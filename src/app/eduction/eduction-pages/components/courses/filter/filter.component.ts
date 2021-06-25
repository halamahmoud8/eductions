import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { CoursesService } from '../../../services/eduction.services';
import { Filter } from '../../../model/filter.model';

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.sass"],
})
export class FilterComponent implements OnInit {

  isOpen!: boolean;
  constructor() { }
  @Output() filterEventEmitter = new EventEmitter<{filterValues:Filter[]}>();
  
  filterValues: Filter[] = []
  caterioes: string[] = [
    "Development",
    "Finance",
    "IT & Software",
    "Other",
  ]
  durations: string[] = [
    "Less than 2 hours",
    "From 2 to 10 hours",
    "more than 10 hours"
  ]

  openFilter() {
    this.isOpen = !this.isOpen;
  }
  onClickFilter(isCategory:boolean,filterValue: string) {
    const filterElement = this.filterValues.find(filter => { filter.filterName == filterValue });
    if (filterElement) {
   this.filterValues.filter(element => {element.filterName== filterValue});
  this.filterEventEmitter.emit({filterValues: this.filterValues});
  } else {
    const filterElement: Filter = {filterName: filterValue , isCategory:isCategory};
  this.filterValues.push(filterElement);
  this.filterEventEmitter.emit({filterValues: this.filterValues});
  }
}
ngOnInit(): void {


  if(window.innerWidth > 768) {
  this.isOpen = true;
} else {
  this.isOpen = false;
}
    // let getStudentCourses = this.courseService.getStudentCourses(1239);
    // console.log("***",getStudentCourses);
    // let getCoursesByID = this.courseService.getCoursesByID(125);
    // console.log("++++",getCoursesByID);
  }

}
