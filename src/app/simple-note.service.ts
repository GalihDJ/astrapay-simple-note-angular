import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleNote } from './simple-note';

@Injectable({
  providedIn: 'root'
})
export class SimpleNoteService {

  private baseURL = "http://localhost:8080/api/simple-note"

  constructor(private httpClient: HttpClient) { }

  getAllSimpleNotes(): Observable<SimpleNote[]>{
    return this.httpClient.get<SimpleNote[]>(`${this.baseURL}`)
  }

  createSimpleNote(simpleNote: SimpleNote): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, simpleNote)
  }

  deleteSimpleNote(noteId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${noteId}`)
  }
}
