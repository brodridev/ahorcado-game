import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teclado } from './teclado';

describe('Teclado', () => {
  let component: Teclado;
  let fixture: ComponentFixture<Teclado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teclado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teclado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
