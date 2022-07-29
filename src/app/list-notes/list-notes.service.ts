import {Note} from "../model/Note";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ListNotesService {

  constructor(private httpClient: HttpClient) {
  }

  getAllNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>('/api/notes-app/all-notes');
  }
}
