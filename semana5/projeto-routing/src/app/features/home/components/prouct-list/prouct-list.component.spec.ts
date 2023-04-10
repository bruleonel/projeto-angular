import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuctListComponent } from './prouct-list.component';

describe('ProuctListComponent', () => {
  let component: ProuctListComponent;
  let fixture: ComponentFixture<ProuctListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProuctListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProuctListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
