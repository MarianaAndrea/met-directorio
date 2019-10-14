import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatInputModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSelectModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatListModule,
  MatStepperModule,
  MatCheckboxModule,
  MatDividerModule
} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatStepperModule,
    MatCheckboxModule,
    MatDividerModule

  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatStepperModule,
    MatCheckboxModule,
    MatDividerModule
  ]
})
export class CustomMaterialModule { }
