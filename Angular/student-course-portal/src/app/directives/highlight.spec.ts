import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight';

@Component({
  template: `<div appHighlight="yellow">Testing Highlight</div>`,
  standalone: true,
  imports: [HighlightDirective]
})
class TestComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create test host component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
