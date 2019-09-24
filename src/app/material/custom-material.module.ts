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
<<<<<<< HEAD
  MatTableModule,
  MatPaginatorModule,
  MatListModule
=======
  MatStepperModule,
  MatCheckboxModule
>>>>>>> 51a6e28b96add1862fd15c97d013ae6058ce8349
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
<<<<<<< HEAD
    MatTableModule,
    MatPaginatorModule,
    MatListModule

=======
    MatStepperModule,
    MatCheckboxModule
>>>>>>> 51a6e28b96add1862fd15c97d013ae6058ce8349
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
<<<<<<< HEAD
    MatTableModule,
    MatPaginatorModule,
    MatListModule
=======
    MatStepperModule,
    MatCheckboxModule
>>>>>>> 51a6e28b96add1862fd15c97d013ae6058ce8349
  ]
})
export class CustomMaterialModule { }
