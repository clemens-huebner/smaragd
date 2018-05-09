import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {isDefined} from '@angular/compiler/src/util';

@Component({
  selector: 'app-weakness-list',
  templateUrl: './weakness-list.component.html',
  styleUrls: ['./weakness-list.component.css']
})
export class WeaknessListComponent implements OnInit {


  weaknesses: Object[];
  selectedWeakness;
  searchstring;
  searchresults;


  constructor(private dataService: DataService) {
    this.searchstring = ""
  }

  ngOnInit() {
    this.getWeaknesses();
    this.filterWeaknesses();
  }

  getWeaknesses() {
    this.weaknesses = this.dataService.getWeaknesses();
      // this.dataService.getWeaknesses()
      // .then(weaknesses => {
      //   this.weaknesses = weaknesses;
      //   console.log(this.weaknesses);
      //   this.weaknesses = this.weaknesses.filter(
      //     weaknessID => weaknessID["Name"].includes("Command")
      //   );
      // });
  }

  filterWeaknesses() {
    console.log(this.searchstring)
    if (isDefined(this.searchstring) && this.searchstring !== ''){
      this.searchresults = this.weaknesses.filter(
        weakness => weakness["Name"].toLowerCase().includes(this.searchstring.toLowerCase())
      );
  } else {
      this.searchresults = this.weaknesses;
    }
  }


  onSelect(weakness) {
    this.selectedWeakness = weakness;
  }

}
