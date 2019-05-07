import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriphomeComponent } from './triphome.component';

describe('TriphomeComponent', () => {
  let component: TriphomeComponent;
  let fixture: ComponentFixture<TriphomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriphomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
