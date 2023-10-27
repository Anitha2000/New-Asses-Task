
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Path } from 'src/core/enums/path.enum';

const routes: Routes = [
  {
    path: Path.Users,
    loadChildren: () => import('./admin/users/users.module').then((m) => m.UsersModule),
},
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
