import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../models/Project';
import {CarouselModule} from 'ngx-bootstrap/carousel'

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
      
  project = {} as Project;

  constructor(public bsModalRef: BsModalRef) {
    
    
  }
}
