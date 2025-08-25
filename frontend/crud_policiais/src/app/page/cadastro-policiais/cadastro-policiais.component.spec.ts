import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPoliciaisComponent } from './cadastro-policiais.component';

describe('CadastroPoliciaisComponent', () => {
  let component: CadastroPoliciaisComponent;
  let fixture: ComponentFixture<CadastroPoliciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroPoliciaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPoliciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
