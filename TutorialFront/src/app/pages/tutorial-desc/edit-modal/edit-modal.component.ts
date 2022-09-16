import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  @Input() tutorial : Tutorial = new Tutorial();

  constructor(private tutorialService : TutorialService, route: ActivatedRoute) {}

  editTutorial(){
    this.tutorialService.editTutorial(this.tutorial).subscribe();
  }

  ngOnInit(): void {
  }

}
