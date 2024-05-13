import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularTest } from './angular-test.component';
import { PostApi } from './Post.component';

const routes: Routes = [
  { path: 'angular-test', component: AngularTest },
  { path: 'post-api', component: PostApi },
  { path: '', redirectTo: '/angular-test', pathMatch: 'full' } // Redirect to angular-test component by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
