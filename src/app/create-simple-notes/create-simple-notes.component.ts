import { Component, OnInit } from '@angular/core';
import { SimpleNote } from '../simple-note';
import { SimpleNoteService } from '../simple-note.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-simple-notes',
  imports: [RouterModule, FormsModule],
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
    this.simpleNoteService.createSimpleNote(this.simpleNote).subscribe(data =>{
      console.log(data);
      this.goToSimpleNoteList();
    })
  }

  goToSimpleNoteList(){
    this.router.navigate(['/simple-notes'])
  }

  onSubmit(){
    console.log(this.simpleNote);
    this.createSimpleNote();
  }
}
