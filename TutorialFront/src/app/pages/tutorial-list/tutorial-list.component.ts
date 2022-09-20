import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {

  showedTutorials: Tutorial[] = [];

  constructor(public tutorialService: TutorialService) {
    
    this.tutorialService.getTutorials().subscribe(allTutorials =>{
      this.showedTutorials = allTutorials;
    })
  }
  
  ngOnInit(): void {
  }

}
