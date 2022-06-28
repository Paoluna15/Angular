import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundarioHComponent } from './secundario-h.component';

describe('SecundarioHComponent', () => {
  let component: SecundarioHComponent;
  let fixture: ComponentFixture<SecundarioHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecundarioHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecundarioHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
