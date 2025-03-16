import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-big-button',
  imports: [],
  templateUrl: './big-button.component.html',
  styleUrl: './big-button.component.scss'
})
export class BigButtonComponent {
  @Input() buttonText: string = 'Click Me';
  @Output() action = new EventEmitter<void>();
}
