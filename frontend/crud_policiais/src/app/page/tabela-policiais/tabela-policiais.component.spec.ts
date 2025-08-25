import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPoliciaisComponent } from './tabela-policiais.component';

describe('TabelaPoliciaisComponent', () => {
  let component: TabelaPoliciaisComponent;
  let fixture: ComponentFixture<TabelaPoliciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaPoliciaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaPoliciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
