import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalHComponent } from './principal-h.component';

describe('PrincipalHComponent', () => {
  let component: PrincipalHComponent;
  let fixture: ComponentFixture<PrincipalHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
