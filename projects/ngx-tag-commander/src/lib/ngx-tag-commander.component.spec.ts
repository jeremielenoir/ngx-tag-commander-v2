import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGXTAGCOMMANDERComponent } from './ngx-tag-commander.component';

describe('NGXTAGCOMMANDERComponent', () => {
  let component: NGXTAGCOMMANDERComponent;
  let fixture: ComponentFixture<NGXTAGCOMMANDERComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGXTAGCOMMANDERComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGXTAGCOMMANDERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
