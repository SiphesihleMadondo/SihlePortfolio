import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  


  projects = {} as Project[];

  constructor(private titleService: Title, private ProjectService: ProjectsService){
     this.titleService.setTitle('Siphesihle - Portfolio')
  }
  ngOnInit(): void {
    this.projects = this.ProjectService.getProjects();
  }
}
