import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePDFComponent } from './file-pdf.component';

describe('FilePDFComponent', () => {
  let component: FilePDFComponent;
  let fixture: ComponentFixture<FilePDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilePDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilePDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
