import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ProjectCardComponent } from '../project-card/project-card.component'
import { Project } from '../models/Project'
import { Tag } from '../models/Tag'
import { ProjectsService } from '../_services/projects.service'
import { FormsModule } from '@angular/forms'
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, FormsModule, CollapseModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  projects = {} as Project[]
  isCollapsed: boolean = true
  typescript: boolean = false
  angular: boolean = false
  javascript: boolean = false
  node: boolean = false
  csharp: boolean = false
  dotnet: boolean = false
  php: boolean = false
  azure: boolean = false
  filtering: boolean = false

  constructor (
    private titleService: Title,
    private ProjectService: ProjectsService
  ) {
    this.titleService.setTitle('Siphesihle - Portfolio')
  }
  ngOnInit (): void {
    this.projects = this.ProjectService.getProjects()
  }

  Filter () {
    let filterTags: Tag[] = []

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT)
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR)
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT)
    }
    if (this.node) {
      filterTags.push(Tag.NODEJS)
    }
    if (this.csharp) {
      filterTags.push(Tag.CSHARP)
    }
    if (this.dotnet) {
      filterTags.push(Tag.ASPNETCORE)
    }
    if (this.php) {
      filterTags.push(Tag.PHP)
    }
    if (this.azure) {
      filterTags.push(Tag.AZURE)
    }

    if (
      this.typescript ||
      this.angular ||
      this.javascript ||
      this.node ||
      this.csharp ||
      this.dotnet ||
      this.php ||
      this.azure
    ) {
      this.filtering = true
    } else {
      this.filtering = false
    }

    this.projects = this.ProjectService.getProjectsByFilter(filterTags)
  }

  ResetFilters () {
    this.typescript = false
    this.angular = false
    this.javascript = false
    this.node = false
    this.csharp = false
    this.dotnet = false
    this.php = false
    this.azure = false
    this.filtering = false
    this.projects = this.ProjectService.getProjects()
  }
}
