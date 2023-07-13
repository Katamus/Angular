import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';


@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})
export class NameComponent {

    public characters: Character[] = [
        {
            name:'Krillin',
            power:1000
        },{
            name:'Goku',
            power:9500
        },{
            name:'Veggeta',
            power:7500
        }
    ];

    onNewCharacter(character:Character):void{
        this.characters.push(character);
    }

    onDeleteCharacter(index:number):void{
        this.characters.splice(index,1);
    }

}