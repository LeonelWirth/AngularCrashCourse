import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "Btn"; // Valor por defecto "Btn"
  @Input() color: string = "blue"; // Valor por defecto "blue"

  constructor() {}

  ngOnInit(): void {}
}
