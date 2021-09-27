import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharacterListComponent } from './character-list/character-list.component';
import {CharacterComponent} from './character.components'

const myComponent = [CharacterDetailsComponent, CharacterListComponent,CharacterComponent];

@NgModule({
  declarations: [...myComponent],
  imports: [CommonModule, RouterModule],
  exports: [...myComponent],
})
export class CharactersModule {}
