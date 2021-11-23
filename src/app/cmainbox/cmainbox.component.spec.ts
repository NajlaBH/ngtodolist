import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmainboxComponent } from './cmainbox.component';

describe('CmainboxComponent', () => {
  let component: CmainboxComponent;
  let fixture: ComponentFixture<CmainboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmainboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmainboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
