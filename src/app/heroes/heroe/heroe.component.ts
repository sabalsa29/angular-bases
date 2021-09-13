import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe', 
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    
    nombre: string ='Spider-Man';
    edad: number =20;

    get nombreCapi():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre}- ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre ='Iroman';
    }

    cambiarEdad():void{
        this.edad =32;
    }
}       