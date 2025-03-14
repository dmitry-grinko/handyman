import { Component, Input } from '@angular/core';
import { ProjectContent } from '../../interfaces/content.interfaces';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-project-item',
  imports: [NgIf],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {
  @Input() project?: ProjectContent;
}
