import { Component, OnInit } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEmpire } from  '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faEmpire = faEmpire;
  id = "";
  

  constructor() { }

  ngOnInit(): void {
  }

  public click (id: string){
    switch (this.id) {
      case "facebook":
        window.location.href = '...';
        break;
      case "linkedIn":
        window.location.href = '...';
        break;
      case "linkedIn":
        window.location.href = '...';
        break;
      case "linkedIn":
        window.location.href = '...';
        break;
      case "linkedIn":
        window.location.href = '...';
        break;
    }
  }
  

  
}
