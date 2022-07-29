import { Component, OnInit } from '@angular/core';
import {AddNoteService} from "./add-note.service";
import {Note} from "../model/Note";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  noteFormGroup: FormGroup;
  successful = false;

  constructor(private addNoteService: AddNoteService) { }

  ngOnInit(): void {
    this.noteFormGroup = new FormGroup({
      titleValue: new FormControl(null, Validators.required),
      contentValue: new FormControl(null, Validators.required)
    });

  }

  addNote() {
    let title = this.noteFormGroup.get('titleValue')?.value;
    let content = this.noteFormGroup.get('contentValue')?.value;

    this.addNoteService.addNote(new Note(title, content)).subscribe({
      next: (status: any) => {
        if(status === 202) {
          this.successful = true;
          this.noteFormGroup.reset();
        }
      },
      error: ((error: any) => {
      })});
  }
}
