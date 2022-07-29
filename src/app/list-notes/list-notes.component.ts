import { Component, OnInit } from '@angular/core';
import {ListNotesService} from "./list-notes.service";
import {Note} from "../model/Note";

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit {

  notesList: Note[];

  constructor(private listNotesService: ListNotesService) { }

  ngOnInit(): void {
    this.listNotesService.getAllNotes().subscribe({
      next: (notes: Note[]) => {
        this.notesList = notes;
      },
      error: () => {
      }});
  }
}
