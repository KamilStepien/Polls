import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollDiplayComponent } from './poll-diplay.component';

describe('PollDiplayComponent', () => {
  let component: PollDiplayComponent;
  let fixture: ComponentFixture<PollDiplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollDiplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollDiplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
