import {NgModule} from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule, MatFormFieldModule, MatInputModule, MatTableModule, MatChipsModule, MatListModule, MatTabsModule, MatGridListModule,
  MatButtonToggleModule, MatDialogModule, MatTooltipModule
} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    MatChipsModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatTooltipModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    MatChipsModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatTooltipModule
  ]
})
export class MaterialModule {
}
