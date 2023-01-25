import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TablasRetencionComponent } from "./tablas-retencion.component";

describe("TablasRetencionComponent", () => {
  let component: TablasRetencionComponent;
  let fixture: ComponentFixture<TablasRetencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablasRetencionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TablasRetencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
