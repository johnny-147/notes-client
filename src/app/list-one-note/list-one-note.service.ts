import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Note} from "../model/Note";

@Injectable({
  providedIn: "root"
})
export class ListOneNoteService {

  constructor(private httpClient: HttpClient) {
  }

  getOneNote(title: string): Observable<Note> {
    return this.httpClient.get<Note>(`/api/notes-app/note/${title}`);
  }
}
