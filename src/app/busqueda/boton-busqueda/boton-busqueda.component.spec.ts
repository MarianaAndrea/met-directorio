import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonBusquedaComponent } from './boton-busqueda.component';

describe('BotonBusquedaComponent', () => {
  let component: BotonBusquedaComponent;
  let fixture: ComponentFixture<BotonBusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonBusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
