import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialDescComponent } from './tutorial-desc.component';

describe('TutorialDescComponent', () => {
  let component: TutorialDescComponent;
  let fixture: ComponentFixture<TutorialDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
