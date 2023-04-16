import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicePrecioAsfaltoComponent } from './indice-precio-asfalto.component';

describe('IndicePrecioAsfaltoComponent', () => {
  let component: IndicePrecioAsfaltoComponent;
  let fixture: ComponentFixture<IndicePrecioAsfaltoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicePrecioAsfaltoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicePrecioAsfaltoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
