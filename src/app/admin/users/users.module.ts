import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-rounting.module';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsersListComponent } from './pages/user-list/users-list.component';
import { UsersFormComponent } from './pages/users-form/users-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [
        UsersListComponent,
        UsersFormComponent
    ],
    imports: [
      CommonModule,
      UsersRoutingModule,  
      MatTableModule,
      MatPaginatorModule,
      ReactiveFormsModule,
      MatSortModule,
      MatProgressSpinnerModule,
      MatCardModule,
      MatDialogModule
    ]
  })
  export class UsersModule { }