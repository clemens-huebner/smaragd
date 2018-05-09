import {Component, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogConfig, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(matIconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public  dialog: MatDialog) {
    matIconRegistry.addSvgIcon('smaragd', sanitizer.bypassSecurityTrustResourceUrl('../assets/smaragd.svg'));
  }



}
