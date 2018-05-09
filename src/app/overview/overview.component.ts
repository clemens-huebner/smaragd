import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {owasps} from '../../assets/data';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  owasps: any;
  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.getOWASPS();
  }

  getOWASPS() {
    this.owasps = this.dataService.getOWASPs();
  }

  getWeakness(id: number) {
    return this.dataService.getWeakness(id);
  }
}
