import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})


export class HeaderComponent implements OnInit {

  pacientes:any={
    apellido:"",
    nombre:"",
    dni:""
  }




  constructor() { }

  ngOnInit() {
  }

}
