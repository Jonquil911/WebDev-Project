import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {MainWaveComponent} from './main-wave/main-wave.component';
import {CoursesListComponent} from './courses-list/courses-list.component';
import {CourseFilesComponent} from './course-files/course-files.component';
import {FilePDFComponent} from './file-pdf/file-pdf.component';
import {AccountComponent} from './account/account.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainWaveComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'courses', component: CoursesListComponent},
  {path: 'course/:name', component: CourseFilesComponent},
  {path: 'course/:name/:file_name', component: FilePDFComponent},
  {path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
