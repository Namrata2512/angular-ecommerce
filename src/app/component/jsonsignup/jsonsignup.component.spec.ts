import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonsignupComponent } from './jsonsignup.component';

describe('JsonsignupComponent', () => {
  let component: JsonsignupComponent;
  let fixture: ComponentFixture<JsonsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
