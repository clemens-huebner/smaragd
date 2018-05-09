import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-phase-chips',
  templateUrl: './phase-chips.component.html',
  styleUrls: ['./phase-chips.component.css']
})
export class PhaseChipsComponent implements OnInit {

  @Input() phases: string[];

  constructor() {
  }

  ngOnInit() {
  }

}
