import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-measure-view',
  templateUrl: './measure-view.component.html',
  styleUrls: ['./measure-view.component.css']
})
export class MeasureViewComponent implements OnInit {

  measure: any;
  weaknesses: any;
  selected = new FormControl(0);

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getMeasure();
  }

  getMeasure(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.measure = this.dataService.getMeasure(id);
    this.weaknesses = this.measure['Weaknesses'].map(weaknessid => this.dataService.getWeakness(weaknessid));
    this.measure.VerificationArray = this.measure.Verification.split('\\');
  }

  saveSelected($event): void {
      this.selected.setValue($event);
  }

}
