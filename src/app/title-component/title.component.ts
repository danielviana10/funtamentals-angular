import { Component } from "@angular/core";

@Component({
  selector: "app-title",
  template: "<h1>{{title}}</h1>",
  styles: [
    `h1 { color: #369;
         font-family: Arial, sans-serif;
         font-size: 250%;
         text-align: center;
         }`
  ]
})

export class TitleComponent {
  title = 'Fundamentals of Angular';
}
