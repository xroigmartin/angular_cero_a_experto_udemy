import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrl: './add-characters.component.css'
})
export class AddCharactersComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();


  public character: Character ={
    name: '',
    power: 0
  }

  emitCharacter(){
    console.log(this.character);

    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name:'', power: 0};
  }

}
