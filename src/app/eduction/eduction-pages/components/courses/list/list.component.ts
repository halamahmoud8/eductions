import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  @Input() courseList: any = [];


  constructor() { }

  ngOnInit() { }


}
