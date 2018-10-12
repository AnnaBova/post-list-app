import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AppRoutingModule } from './app.routing.module';
import { AddPostComponent } from './add-post/add-post.component';



@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    AddPostComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
