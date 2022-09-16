import { Injectable } from '@angular/core';
import { Tutorial } from '../models/tutorial';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  tutorials: Tutorial[] = [];
  constructor(private http: HttpClient) { }

  getTutorials(): Tutorial[]{
    
    this.http.get<Tutorial[]>('http://localhost8080/tutorials').subscribe(data => {
      this.tutorials = data
    })

    return this.tutorials;
  }

  getTutorial(id: number): Tutorial{
    let tutorial: Tutorial = new Tutorial();
    
    this.http.get<Tutorial>('http://localhost8080/tutorials/{{id}}').subscribe(data =>{
      tutorial = data;
    });
    
    return tutorial;
  }

  addTutorial(tutorial: Tutorial){
    const body = {"title":tutorial.title, }
  }

  editTutorial(tutorial: Tutorial){

  }

  deleteTutorial(tutorial: Tutorial){
    
  }


}
