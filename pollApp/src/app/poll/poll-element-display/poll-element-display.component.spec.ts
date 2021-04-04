import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollElementDisplayComponent } from './poll-element-display.component';

describe('PollElementDisplayComponent', () => {
  let component: PollElementDisplayComponent;
  let fixture: ComponentFixture<PollElementDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollElementDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollElementDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
