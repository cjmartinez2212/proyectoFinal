import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFormMenuComponent } from './admin-form-menu.component';

describe('AdminFormMenuComponent', () => {
  let component: AdminFormMenuComponent;
  let fixture: ComponentFixture<AdminFormMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFormMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFormMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
