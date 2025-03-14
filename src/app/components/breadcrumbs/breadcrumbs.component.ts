import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  imports: [NgIf],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.scss'
})
export class BreadcrumbsComponent {
  @Input() breadcrumbData: { title: string; } | undefined;

  constructor() {}
}
