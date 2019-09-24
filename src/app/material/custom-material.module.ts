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
  MatListModule
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
    MatListModule

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
    MatListModule
  ]
})
export class CustomMaterialModule { }
