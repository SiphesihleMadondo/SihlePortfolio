import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';
<<<<<<< HEAD
import { ProjectsService } from '../_services/projects.service';
=======
>>>>>>> c1449464509fc8bdd641d7643e441be0f862e6df

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

  projects: Project [] = [
  {id: 0, name: 'Sample Angular App',pictures: [], summary: 'Devloped a project that advertises homes',description: 'homes app',projectLink: 'https://github.com/',tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]},
  {id: 1, name: 'Sample .NET Core App',pictures: [], summary: 'Devloped a project that advertises homes',description: 'homes app',projectLink: 'https://github.com/',tags: [Tag.CSHARP, Tag.ASPNETCORE]},
  {id: 2, name: 'Sample Azure static App',pictures: [], summary: 'Devloped an Azure static app',description: 'Vanilla-app',projectLink: 'https://github.com/',tags: [Tag.AZURE, Tag.JAVASCRIPT]},
  {id: 3, name: 'Sample Angular and PHP',pictures: [], summary: 'Devloped a Timesheet System',description: 'Timesheet App',projectLink: 'https://github.com/',tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.PHP]},
  {id: 4, name: 'Sample Wep API, Angular App',pictures: [], summary: 'Simple Web API app',description: 'Simple app',projectLink: 'https://github.com/',tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.ASPNETCORE]},
  
 ]
  constructor(private titleService: Title){
>>>>>>> c1449464509fc8bdd641d7643e441be0f862e6df
    this.titleService.setTitle('Siphesihle - Portfolio')
  }
  ngOnInit(): void {
    this.projects = this.ProjectService.getProjects();
  }
}
