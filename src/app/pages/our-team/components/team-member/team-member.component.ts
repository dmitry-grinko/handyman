import { Component, Input } from '@angular/core';

export interface TeamMemberData {
  name: string;
  position: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-team-member',
  imports: [
  ],
  templateUrl: './team-member.component.html',
  styleUrl: './team-member.component.scss'
})
export class TeamMemberComponent {
  @Input() data!: TeamMemberData;
}
