import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonloginComponent } from './jsonlogin.component';

describe('JsonloginComponent', () => {
  let component: JsonloginComponent;
  let fixture: ComponentFixture<JsonloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
