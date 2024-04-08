import { Injectable } from '@angular/core';

import { Project } from '../models/Project';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  projects: Project [] = [
    {id: 0, name: 'Sample Angular App',pictures: ["../../assets/Homes App/Image 1.PNG", "../../assets/Homes App/Image 2.PNG","../../assets/Homes App/Image 3.PNG","../../assets/Homes App/Image 4.PNG","../../assets/Homes App/Image 5.PNG"], summary: 'Developed a project that advertises homes',description: 'homes app',projectLink: 'https://github.com/',tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]},
    {id: 1, name: 'Sample .NET Core App',pictures: ["../../assets/Homes App/Image 1.PNG", "../../assets/Homes App/Image 2.PNG","../../assets/Homes App/Image 3.PNG","../../assets/Homes App/Image 4.PNG","../../assets/Homes App/Image 5.PNG"], summary: 'Developed a project that advertises homes',description: 'homes app',projectLink: 'https://github.com/',tags: [Tag.CSHARP, Tag.ASPNETCORE]},
    {id: 2, name: 'Sample Azure static App',pictures: [], summary: 'Developed an Azure static app',description: 'Vanilla-app',projectLink: 'https://github.com/',tags: [Tag.AZURE, Tag.JAVASCRIPT]},
    {id: 3, name: 'Sample Angular and PHP',pictures: ["../../assets/Timesheet App/Image 1.PNG"], summary: 'Developed a Timesheet System',description: 'Timesheet App',projectLink: 'https://github.com/',tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.PHP]},
    {id: 4, name: 'Sample Wep API, Angular App',pictures: ["../../assets/Angular App, Web API/Image 1.PNG", "../../assets/Angular App, Web API/Image 2.PNG","../../assets/Angular App, Web API/Image 3.PNG"], summary: 'Simple Web API app',description: 'Simple Web API app',projectLink: 'https://github.com/',tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.ASPNETCORE]},
    
   ]

  constructor() { }

  getProjects(){
    return this.projects;
  }
  
  getProjectId(id: number): Project{
    // search for the 
     let project = this.projects.find(project => project.id === id);
     
     //Throw type error if the project isn't found.
     if (project === undefined) {
       throw new TypeError('There is no project that matches the id: ' + id);
     }

     return project;
  }


}
