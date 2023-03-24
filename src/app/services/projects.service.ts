import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map, Observable} from "rxjs";
import {Project} from "../models/Project";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectsPath : string = "products"

  constructor(private store : AngularFirestore) { }

  projects : Observable<Project[]> = this.store.collection<Project>(this.projectsPath).snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Project;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  )

  getAllProjects() : Observable<Project[]> {
    return this.projects;
  }
}
