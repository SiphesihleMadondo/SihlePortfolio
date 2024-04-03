import { Component, Input } from '@angular/core';
import { Project } from '../models/Project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  //passing data between components
   @Input() project = {} as Project
}
