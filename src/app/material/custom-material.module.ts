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
  MatCheckboxModule
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
    MatCheckboxModule

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
    MatCheckboxModule
  ]
})
export class CustomMaterialModule { }
