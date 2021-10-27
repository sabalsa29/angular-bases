import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

  private _personajes: Personaje[]=[
    {
      nombre: 'Goku',
      poder: 12332
    },
    {
      nombre: 'vegeta',
      poder:2333
    },
    {
      nombre: 'picoro',
      poder:2333
    }
  ];

  get personajes(): Personaje[] {
      return [...this._personajes];

  }

  constructor(){
  }

  agregarPersonaje( personaje:Personaje){
  this._personajes.push(personaje);
  }


}
