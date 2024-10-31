import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Main } from './pages/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/addcharacter/addcharacter.component';



@NgModule({
  declarations: [
    Main,
    ListComponent,
    AddCharacterComponent
  ],
  exports: [
    Main
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
