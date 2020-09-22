import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import { SearchPageComponent } from './search-page/search-page.component';
import {MatIconModule} from '@angular/material/icon';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppsIcon }  from '@material-ui/icons/Apps';
// import { Avatar } from '@material-ui/core';
import {SearchService} from './services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { DndDirective } from './dnd.directive';
import {FileUploadModule} from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchPageComponent,
    SearchComponent,
    UploadPageComponent,
    DndDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatButtonToggleModule,
    FileUploadModule,
    ReactiveFormsModule
    
    
    // Avatar
    // AppsIcon,
    
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
