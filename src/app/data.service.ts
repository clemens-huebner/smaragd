import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {measures, owasps, weaknesses} from '../assets/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  weaknesses: any;
  measures: any;
  owasps: any;

  constructor(private http: HttpClient) {
    this.loadWeaknesses();
  }

  ngOnInit() {

  }

  loadWeaknesses() {
    // console.log('Loading started');
    // this.http.get('assets/weaknesses.json')
    //   .subscribe((weaknesses: any) => {
    //     this.weaknesses = weaknesses;
    //     this.loaded = true;
    //   });
    this.weaknesses = weaknesses;
    this.measures = measures;
    this.owasps = owasps;

  }

  dictToArray(dictionary): Object[] {
    const array: Object[] = [];
    for (const key of Object.keys(dictionary)) {
      dictionary[key]['ID'] = key;
      array.push(dictionary[key]);
    }
    return array;
  }

  // getWeaknesses(): Promise<Object[]> {
  //   const promise: Promise<Object[]> = new Promise((resolve) => {
  //     resolve(this.dictToArray(this.weaknesses));
  //   });
  //   return promise;
  // }

  getWeaknesses(): Object[] {
    return this.dictToArray(this.weaknesses);
  }

  getWeakness(id: number){
    return this.weaknesses[id];
  }

  // getMeasure(id: number): Promise<Object> {
  //   const promise = new Promise((resolve) => {
  //     resolve(this.weaknesses[id]);
  //   });
  //   return promise;
  // }

  getMeasures() {
    return this.dictToArray(this.measures);
  }

  getMeasure(id: number){
    const result = this.measures[id];
    result["ID"] = id;
    return result;
  }

  getOWASPs(){
    return this.dictToArray(this.owasps);
  }

}
