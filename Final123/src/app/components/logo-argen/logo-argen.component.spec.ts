import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoArgenComponent } from './logo-argen.component';

describe('LogoArgenComponent', () => {
  let component: LogoArgenComponent;
  let fixture: ComponentFixture<LogoArgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoArgenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoArgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
