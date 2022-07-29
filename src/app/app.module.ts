import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNoteComponent } from './add-note/add-note.component';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { ListOneNoteComponent } from './list-one-note/list-one-note.component';
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    ListNotesComponent,
    ListOneNoteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'add-note', component: AddNoteComponent },
      { path: 'list-all-notes', component: ListNotesComponent },
      { path: 'list-note', component: ListOneNoteComponent },
      { path: '', component: HomeComponent }
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
