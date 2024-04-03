import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../models/Project';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  
  project: Project = {
    id: 0,
    name: 'Sample Angular App',
    summary: 'Test Description',
    description: '',
    projectLink: '',
    tags: ['Angular', 'TypeScript'],
    pictures: []
  }
  constructor(private titleService: Title){
    this.titleService.setTitle('Siphesihle - Portfolio')
  }
}
