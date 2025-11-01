import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunecoAhorcado } from './muneco-ahorcado';

describe('MunecoAhorcado', () => {
  let component: MunecoAhorcado;
  let fixture: ComponentFixture<MunecoAhorcado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MunecoAhorcado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MunecoAhorcado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
