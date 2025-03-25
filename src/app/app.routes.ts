import { RouterModule, Routes } from '@angular/router';
import { SimpleNotesListComponent } from './simple-notes-list/simple-notes-list.component';
import { CreateSimpleNotesComponent } from './create-simple-notes/create-simple-notes.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: 'simple-notes', component: SimpleNotesListComponent},
    {path: 'create-simple-notes', component: CreateSimpleNotesComponent},
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
export class AppRoutingModule{ }
