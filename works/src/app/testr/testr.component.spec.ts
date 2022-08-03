import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestrComponent } from './testr.component';

fdescribe('TestrComponent', () => {
  let component: TestrComponent;
  let fixture: ComponentFixture<TestrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestrComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
