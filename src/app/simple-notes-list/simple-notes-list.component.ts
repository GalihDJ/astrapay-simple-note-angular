import { Component, OnInit } from '@angular/core';
import { SimpleNote } from '../simple-note';
import { SimpleNoteService } from '../simple-note.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-simple-notes-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './simple-notes-list.component.html',
  styleUrl: './simple-notes-list.component.css',
  standalone: true

})
export class SimpleNotesListComponent implements OnInit {

  simpleNotes: SimpleNote[] = [];

  constructor(private simpleNoteService: SimpleNoteService,
    private router: Router){}

    ngOnInit(): void {
        this.getAllSimpleNotes();
    }

    private getAllSimpleNotes(){
      this.simpleNoteService.getAllSimpleNotes().subscribe(data => {
        this.simpleNotes = data;
        console.log(this.simpleNotes)
      });
    }

    deleteSimpleNote(noteId: number){
      this.simpleNoteService.deleteSimpleNote(noteId).subscribe(data => {
        console.log(data);
        this.getAllSimpleNotes();
      })
    }


}
