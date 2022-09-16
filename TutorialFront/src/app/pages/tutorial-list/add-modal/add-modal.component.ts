import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})
export class AddModalComponent implements OnInit {

  @Input() tutorial: Tutorial = new Tutorial;
  constructor(private tutorialService: TutorialService, route: ActivatedRoute) {}

  addTutorial(){
    //Add tutorial
    this.tutorialService.addTutorial(this.tutorial).subscribe();
  }

  ngOnInit(): void {
  }

}
