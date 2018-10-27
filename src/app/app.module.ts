import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { ContactFormReactiveComponent } from './forms/contact-form-reactive/contact-form-reactive.component';
import { NewCourseFormComponent } from './forms/new-course-form/new-course-form.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { PostComponent } from './http/post/post.component';
import { HttpService } from './http/services/http.service';
import { AppErrorHandler } from './common/errors/app-error-handler';
import { PostService } from './http/post/post.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactFormReactiveComponent,
    NewCourseFormComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    HttpService,
    PostService,
    { provide: ErrorHandler , useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
