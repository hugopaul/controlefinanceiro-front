import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipogastosComponent } from './tipogastos.component';

describe('TipogastosComponent', () => {
  let component: TipogastosComponent;
  let fixture: ComponentFixture<TipogastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipogastosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipogastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
