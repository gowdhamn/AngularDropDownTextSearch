import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdowntextsearchComponent } from './dropdowntextsearch.component';

describe('DropdowntextsearchComponent', () => {
  let component: DropdowntextsearchComponent;
  let fixture: ComponentFixture<DropdowntextsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdowntextsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdowntextsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
