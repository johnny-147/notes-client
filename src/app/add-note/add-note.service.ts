import {Note} from "../model/Note";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AddNoteService {

  constructor(private httpClient: HttpClient) {
  }

  addNote(note: Note): Observable<any> {
    return this.httpClient.post<Note>('/api/notes-app/add-note', note);
  }
}
