import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Project} from "../../models/Project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectsArray : Array<Project> = [
    new Project(1,'Team Portfolio', 'Our web development team portfolio', '', '2023-02-01', '2023-01-07', 'Completed', 'assets/team.PNG', 'https://krymlov-team.web.app/desktop', 'Visit Website'),
    new Project(2,'My Portfolio', 'My developer portfolio', '', '2023-02-08', '2023-02-15', 'Completed', 'assets/firstpreview.PNG', 'https://github.com/dkrymlov/developer-portfolio', 'Go to GitHub'),
    new Project(3,'ToDo List', 'Nice ToDo List with JWT Auth', '', '2022-09-05', '2022-09-24', 'Completed', 'assets/todo.PNG', 'https://github.com/dkrymlov/WEBLab', 'Go to Github'),
    new Project(5,'MeatAlibaba', 'Website for a local meat shop', '', '2023-01-01', '2023-01-28', 'Completed', 'assets/meatali.PNG', 'https://meatalibaba.com/', 'Visit Website'),
  ]

  projectsLength : number = this.projectsArray.length;

  projects : Observable<Project[]> = of(this.projectsArray)

  filterChats(value: string) {
    if (!value){
      this.projects = of(this.projectsArray)
      this.projectsLength = this.projectsArray.length;
    }else {
      this.projects = of(this.projectsArray.filter(chat => chat.title.toLowerCase().includes(value.toLowerCase()) || chat.shortDesc.toLowerCase().includes(value.toLowerCase())))
      this.projectsLength = this.projectsArray.filter(chat => chat.title.toLowerCase().includes(value.toLowerCase()) || chat.shortDesc.toLowerCase().includes(value.toLowerCase())).length
    }
  }

  route(github: string) {
    window.open(github)
  }
}
