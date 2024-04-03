import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    //changing the header based on the option selected on the nav bar.
    //Title a service that is used to get and set the title of the current html page.
    //NB che angular predefine services

    constructor(private titleService: Title){
      this.titleService.setTitle('Siphesihle - Home')
    }
}
