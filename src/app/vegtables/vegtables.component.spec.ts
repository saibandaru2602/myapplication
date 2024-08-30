import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegtablesComponent } from './vegtables.component';

describe('VegtablesComponent', () => {
  let component: VegtablesComponent;
  let fixture: ComponentFixture<VegtablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VegtablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegtablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
