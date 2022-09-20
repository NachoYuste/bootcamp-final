import { Injectable } from '@angular/core';
import { Tutorial } from '../models/tutorial';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getTutorials(){
    return this.http.get<Tutorial[]>('http://localhost:8080/tutorials')
  }

  getTutorial(id: number){    
    return this.http.get<Tutorial>('http://localhost:8080/tutorials/'+id)
  }

  addTutorial(tutorial: Tutorial){
    return this.http.post('http://localhost:8080/tutorials', tutorial);
  }

  editTutorial(tutorial: Tutorial){
    return this.http.put('http://localhost:8080/tutorials/'+tutorial.id, tutorial);
  }

  deleteTutorial(tutorial: Tutorial){
    return this.http.delete('http://localhost:8080/tutorials/'+tutorial.id)
  }


}
