import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  tutorial : Tutorial = new Tutorial();

  constructor(private tutorialService : TutorialService) { }

  editTutorial(){
    this.tutorialService.editTutorial(this.tutorial).subscribe();
  }

  ngOnInit(): void {
  }

}
