import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensaisPorAnoComponent } from './mensais-por-ano.component';

describe('MensaisPorAnoComponent', () => {
  let component: MensaisPorAnoComponent;
  let fixture: ComponentFixture<MensaisPorAnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensaisPorAnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensaisPorAnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
