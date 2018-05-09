import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {DataService} from '../data.service';

@Component({
  selector: 'app-weakness-view',
  templateUrl: './weakness-view.component.html',
  styleUrls: ['./weakness-view.component.css']
})
export class WeaknessViewComponent implements OnInit {

  weakness: any;
  measures: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getWeakness();
  }

  getWeakness(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.weakness = this.dataService.getWeakness(id);
    this.measures = this.weakness['Measures'].map(measureid =>  this.dataService.getMeasure(measureid));
  }



}
