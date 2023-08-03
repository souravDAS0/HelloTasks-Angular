import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTaskDetailsComponent } from './completed-task-details.component';

describe('CompletedTaskDetailsComponent', () => {
  let component: CompletedTaskDetailsComponent;
  let fixture: ComponentFixture<CompletedTaskDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedTaskDetailsComponent]
    });
    fixture = TestBed.createComponent(CompletedTaskDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
