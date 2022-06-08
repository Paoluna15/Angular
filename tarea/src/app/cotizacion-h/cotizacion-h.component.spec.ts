import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionHComponent } from './cotizacion-h.component';

describe('CotizacionHComponent', () => {
  let component: CotizacionHComponent;
  let fixture: ComponentFixture<CotizacionHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizacionHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
