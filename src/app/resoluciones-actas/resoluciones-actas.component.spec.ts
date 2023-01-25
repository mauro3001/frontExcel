import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ResolucionesActasComponent } from "./resoluciones-actas.component";

describe("ResolucionesActasComponent", () => {
  let component: ResolucionesActasComponent;
  let fixture: ComponentFixture<ResolucionesActasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResolucionesActasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResolucionesActasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
