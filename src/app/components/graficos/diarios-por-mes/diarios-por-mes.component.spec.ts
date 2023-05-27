import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiariosPorMesComponent } from './diarios-por-mes.component';

describe('DiariosPorMesComponent', () => {
  let component: DiariosPorMesComponent;
  let fixture: ComponentFixture<DiariosPorMesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiariosPorMesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiariosPorMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
