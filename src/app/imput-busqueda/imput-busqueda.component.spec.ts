import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputBusquedaComponent } from './imput-busqueda.component';

describe('ImputBusquedaComponent', () => {
  let component: ImputBusquedaComponent;
  let fixture: ComponentFixture<ImputBusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImputBusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
