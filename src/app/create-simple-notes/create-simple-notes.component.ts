import { Component, OnInit } from '@angular/core';
import { SimpleNote } from '../simple-note';
import { SimpleNoteService } from '../simple-note.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-simple-notes',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './create-simple-notes.component.html',
  styleUrl: './create-simple-notes.component.css',
  standalone: true

})
export class CreateSimpleNotesComponent implements OnInit{

  simpleNote: SimpleNote = new SimpleNote();
  constructor(private simpleNoteService: SimpleNoteService,
    private router: Router) {}

  ngOnInit(): void {
      
  }

  createSimpleNote(){

    this.simpleNoteService.createSimpleNote(this.simpleNote).subscribe({
      next: () => {
        alert('Note created successfully!');
        this.goToSimpleNoteList();
      },
      error: (err) => {
        alert(err.error?.message || 'An unexpected error occurred.');
      }
    });
  }

  goToSimpleNoteList(){
    this.router.navigate(['/simple-notes'])
  }

  onSubmit(){
    console.log(this.simpleNote);
    if (!this.simpleNote.noteTitle || !this.simpleNote.noteContent) {
      alert('Please fill out all required fields.');
      return;
    }
    this.createSimpleNote();
  }
}
