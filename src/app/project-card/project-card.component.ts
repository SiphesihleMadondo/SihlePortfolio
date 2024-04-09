import { Component, Input } from '@angular/core';
import { Project } from '../models/Project';
import {BsModalRef, BsModalService, ModalModule, ModalOptions} from 'ngx-bootstrap/modal'
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ModalModule],
  providers: [BsModalService], // need to add provider for module to work
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  //passing data between components
   @Input() project = {} as Project
   bsModalRef?: BsModalRef;
   
   constructor(private modalService: BsModalService) {
    
    
   }

   OpenProjectModal(){
 

      //passing modal option such as height, title. e.t.c
      const modalOptions: ModalOptions = {
          class: "modal-lg",
          // passing data to the modal using initialState
          initialState:{
            project :  this.project
          },
          
      };
     
      this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions); // passing the template ref of the modal and options
   }
}
