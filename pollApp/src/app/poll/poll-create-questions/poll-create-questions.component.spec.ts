import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollCreateQuestionsComponent } from './poll-create-questions.component';

describe('PollCreateQuestionsComponent', () => {
  let component: PollCreateQuestionsComponent;
  let fixture: ComponentFixture<PollCreateQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollCreateQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollCreateQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
