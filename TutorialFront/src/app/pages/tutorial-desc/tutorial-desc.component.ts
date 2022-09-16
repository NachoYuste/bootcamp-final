import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-desc',
  templateUrl: './tutorial-desc.component.html',
  styleUrls: ['./tutorial-desc.component.css']
})
export class TutorialDescComponent implements OnInit {

  tutorials: Tutorial[] = [];
  @Input() tutorial: Tutorial = new Tutorial;
  tutorialID: number;

  constructor(public tutorialService: TutorialService) {}

  ngOnInit(): void {
  }

}
