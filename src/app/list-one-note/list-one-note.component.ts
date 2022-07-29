import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Note} from "../model/Note";
import {ListOneNoteService} from "./list-one-note.service";

@Component({
  selector: 'app-list-one-note',
  templateUrl: './list-one-note.component.html',
  styleUrls: ['./list-one-note.component.css']
})
export class ListOneNoteComponent implements OnInit {

  noteFormGroup: FormGroup;
  note: Note;

  constructor(private listOneNoteService: ListOneNoteService) { }

  ngOnInit(): void {
    this.noteFormGroup = new FormGroup({
      titleValue: new FormControl(null, Validators.required)
    });
  }

  findOneNote() {
    let title = this.noteFormGroup.get('titleValue')?.value;

    this.listOneNoteService.getOneNote(title).subscribe({
      next: (note: Note) => {
       this.note = note;
      },
      error: ((error: any) => {
      })});
  }
}
