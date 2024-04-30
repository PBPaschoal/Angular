import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals = [
    { name: "Turca", type: "Dog" },
    { name: "Tom", type: "Cat" },
    { name: "Bob", type: "Horse" },
  ];

  animal = {
    name: 'Teste',
    type: 'Alguma coisa',
  }
}
