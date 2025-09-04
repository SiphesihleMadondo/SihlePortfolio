import { Injectable } from '@angular/core'
import { Project } from '../models/Project'
import { Tag } from '../models/Tag'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Homes (Angular App, Node.JS, TypeScript)',
      pictures: [
        '../../assets/Homes App/Image 1.PNG',
        '../../assets/Homes App/Image 2.PNG',
        '../../assets/Homes App/Image 3.PNG',
        '../../assets/Homes App/Image 4.PNG',
        '../../assets/Homes App/Image 5.PNG'
      ],
      summary: 'Developed a project that advertises homes',
      description: 'homes app',
      projectLink: 'https://github.com/',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS]
    },
    {
      id: 1,
      name: 'Tima .NET Core App, MVC, MVVM, C#, SQL, Azure, HTML, CSS, Bootstrap, JavaScript, Razor',
      pictures: [
        '../../assets/Tima App/Home.png',
        '../../assets/Tima App/Login.png',
        '../../assets/Tima App/Register.png',
        '../../assets/Tima App/Admin-LeaveTypes.png',
        '../../assets/Tima App/Admin-Manage-Requests.png',
        '../../assets/Tima App/Admin-Periods.png',
        '../../assets/Tima App/Admin-Timesheet-Approvals.png',
        '../../assets/Tima App/Admin-Timesheet-EmployeeActivity.png',
        '../../assets/Tima App/Admin-Timesheet-Submissions.png',
        '../../assets/Tima App/Admin-View-Employees.png',
        '../../assets/Tima App/Employee-Create-Timesheet.png',
        '../../assets/Tima App/Employee-LeaveAllocation.png',
        '../../assets/Tima App/Employee-LeaveApplication.png',
        '../../assets/Tima App/Employee-TimesheetDetails.png',
        '../../assets/Tima App/Employee-TimesheetSubmissions.png'
     
      ],
      summary: 'Developed a project that manages leave and timesheets',
      description: 'Tima App (Leave Management/Timesheet System)',
      projectLink: 'https://github.com/',
      tags: [Tag.CSHARP, Tag.ASPNETCORE, Tag.SQL, Tag.AZURE, Tag.HTML, Tag.CSS, Tag.BOOTSTRAP, Tag.JAVASCRIPT, Tag.RAZOR, Tag.MVC, Tag.MVVM]
    },
    {
      id: 2,
      name: 'Sample Azure static App',
      pictures: [
        '../../assets/Vanilla App/Image1.PNG',
        '../../assets/Vanilla App/Image2.PNG'
      ],
      summary: 'Developed an Azure static app',
      description: 'Vanilla-app',
      projectLink: 'https://github.com/',
      tags: [Tag.AZURE, Tag.JAVASCRIPT]
    },
    {
      id: 3,
      name: 'Log Time Angular and PHP',
      pictures: ['../../assets/Timesheet App/Image 1.PNG'],
      summary: 'Developed a Log Time System',
      description: 'Timesheet App',
      projectLink: 'https://github.com/',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.PHP]
    },
    {
      id: 4,
      name: 'Highcharts Angular App, Wep API,',
      pictures: [
        '../../assets/Angular App, Web API/Image 1.PNG',
        '../../assets/Angular App, Web API/Image 2.PNG',
        '../../assets/Angular App, Web API/Image 3.PNG'
      ],
      summary: 'Simple Web API app',
      description: 'Highcharts and Web API app',
      projectLink: 'https://github.com/',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.ASPNETCORE]
    }
  ]

  constructor () {}

  getProjects () {
    return this.projects
  }

  getProjectId (id: number): Project {
    // search for the
    let project = this.projects.find(project => project.id === id)

    //Throw type error if the project isn't found.
    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id)
    }

    return project
  }

  getProjectsByFilter (filterTags: Tag[]) {
    let filteredProjects: Project[] = []

    this.projects.forEach(function (project) {
      let foundndAll = true

      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundndAll = false
        }
      })

      if (foundndAll) {
        filteredProjects.push(project)
      }
    })

    return filteredProjects
  }
}
