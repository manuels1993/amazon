import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoDatailComponent } from './prodotto-datail.component';

describe('ProdottoDatailComponent', () => {
  let component: ProdottoDatailComponent;
  let fixture: ComponentFixture<ProdottoDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdottoDatailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdottoDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
