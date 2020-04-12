import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaBadgeComponent } from './categoria-badge.component';

describe('CategoriaBadgeComponent', () => {
  let component: CategoriaBadgeComponent;
  let fixture: ComponentFixture<CategoriaBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
