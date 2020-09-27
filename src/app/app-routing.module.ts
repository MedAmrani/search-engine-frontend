import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchPageTestComponent } from './search-page-test/search-page-test.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { UploadPageComponent } from './upload-page/upload-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,

  },
  {
    path: 'upload',
    component: UploadPageComponent,

  },
  {
    path: 'search',
    component: SearchPageTestComponent,

  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
