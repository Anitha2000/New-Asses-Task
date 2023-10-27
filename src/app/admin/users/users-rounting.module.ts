import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './pages/user-list/users-list.component';
import { UsersFormComponent } from './pages/users-form/users-form.component';
import { Path } from 'src/core/enums';

const routes: Routes = [
  {
    path: Path.UserList,
    component: UsersListComponent
  },
  {
    path: Path.UserForm,
    component:UsersFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
