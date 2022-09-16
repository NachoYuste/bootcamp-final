import { Injectable } from '@angular/core';
import { Tutorial } from '../models/tutorial';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getTutorials(){
    return this.http.get<any>('http://localhost:8080/tutorials')
  }

  getTutorial(id: number){    
    return this.http.get<Tutorial>('http://localhost:8080/tutorials/{{id}}')
  }

  addTutorial(tutorial: Tutorial){
    const body = {"title":tutorial.title,
                  "description":tutorial.description,
                  "published":tutorial.published,
                  "img":tutorial.img};
    return this.http.post('http://localhost:8080/tutorials', body);
  }

  editTutorial(tutorial: Tutorial){
    const body = {"title":tutorial.title,
                  "description":tutorial.description,
                  "published":tutorial.published,
                  "img":tutorial.img};
    return this.http.put('http://localhost:8080/tutorials/{{tutorial.id}}', body);
  }

  deleteTutorial(tutorial: Tutorial){
    return this.http.delete('http://localhost:8080/tutorials/{{tutorial.id}}')
  }


}
