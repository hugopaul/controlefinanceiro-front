import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentosListComponent } from './lancamentos-list.component';

describe('LancamentosListComponent', () => {
  let component: LancamentosListComponent;
  let fixture: ComponentFixture<LancamentosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancamentosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LancamentosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
