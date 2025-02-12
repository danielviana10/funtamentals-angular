import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos-component.component.html',
  styleUrls: ['./infos-component.component.css']
})
export class InfosComponentComponent {
  name = "Daniel"
  birthdate = "1999-03-16"
  age = 25
}
