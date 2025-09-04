import { CommonModule } from '@angular/common'
import { Component, Renderer2 } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { AccordionModule } from 'ngx-bootstrap/accordion'

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AccordionModule, CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  isWorkExperienceOpen: boolean = false
  isEducationOpen: boolean = false
  isCertificatesOpen: boolean = false
  isSkillsOpen: boolean = false

  constructor (private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Siphesihle - CV')
  }

  DownloadFile () {
    const link = this.renderer.createElement('a')
    link.setAttribute('target', '_blank')
    link.setAttribute('href', '../../assets/SIPHESIHLE MADONDO.docx')
    link.setAttribute('download', '/SIPHESIHLE MADONDO.docx')
    link.click()
    link.remove()
  }
}
