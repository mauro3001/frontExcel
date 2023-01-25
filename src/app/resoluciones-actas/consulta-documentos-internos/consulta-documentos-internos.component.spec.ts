import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConsultaDocumentosInternosComponent } from "./consulta-documentos-internos.component";

describe("ConsultaDocumentosInternosComponent", () => {
  let component: ConsultaDocumentosInternosComponent;
  let fixture: ComponentFixture<ConsultaDocumentosInternosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaDocumentosInternosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaDocumentosInternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
