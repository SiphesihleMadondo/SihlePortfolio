import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../models/Project';
import {CarouselModule} from 'ngx-bootstrap/carousel'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    //changing the header based on the option selected on the nav bar.
    //Title a service that is used to get and set the title of the current html page.
    //NB che angular predefine services
    
    featuredProject = {} as Project;
    constructor(private titleService: Title, private projectService: ProjectsService){
      this.titleService.setTitle('Siphesihle - Home')
    }
  ngOnInit(): void {
    this.featuredProject = this.projectService.getProjectId(0)
  }
}
