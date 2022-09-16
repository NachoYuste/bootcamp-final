import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-desc',
  templateUrl: './tutorial-desc.component.html',
  styleUrls: ['./tutorial-desc.component.css']
})
export class TutorialDescComponent implements OnInit {

  tutorials: Tutorial[] = [];
  tutorial: Tutorial = new Tutorial;


  constructor(public tutorialService: TutorialService, route: ActivatedRoute, public router: Router) {
    let id = parseInt(route.snapshot.paramMap.get('id')!);
    this.tutorialService.getTutorial(id).subscribe(data =>{
      this.tutorial = data;
    })
  }

  deleteTutorial(){
    this.tutorialService.deleteTutorial(this.tutorial).subscribe();
    this.router.navigate(["/tutorials"])
    this.tutorialService.getTutorials().subscribe(data =>{
      this.tutorials = data;
    })
  }

  ngOnInit(): void {
  }

}
