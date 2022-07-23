import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeItemComponent } from './cake-item.component';

describe('CakeItemComponent', () => {
  let component: CakeItemComponent;
  let fixture: ComponentFixture<CakeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CakeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
