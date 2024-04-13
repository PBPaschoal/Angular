import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: string = 'Paulo Bruno';
  age: number = 32;
  job = 'Programador';
  hobbies = ['Estudar', 'Filmes','Séries','Jogar'];
  car = {
    name: "Polo",
    year: 2019,
  }
}
