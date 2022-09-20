import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  tutorial : Tutorial = new Tutorial();

  constructor(private tutorialService : TutorialService, public route: ActivatedRoute, public router: Router) {
    let id = parseInt(route.snapshot.paramMap.get('id')!);
    this.tutorialService.getTutorial(id).subscribe(singleTutorial =>{
      this.tutorial = singleTutorial;
    })
  }

  editTutorial(){
    this.tutorialService.editTutorial(this.tutorial).subscribe();
    this.router.navigate(["/tutorials/"+this.tutorial.id])
  }

  ngOnInit(): void {
  }

}
