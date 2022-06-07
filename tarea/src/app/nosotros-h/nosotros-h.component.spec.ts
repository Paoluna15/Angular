import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosHComponent } from './nosotros-h.component';

describe('NosotrosHComponent', () => {
  let component: NosotrosHComponent;
  let fixture: ComponentFixture<NosotrosHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
