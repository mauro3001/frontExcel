/**
 * Variables de entorno del proyecto.
 */
export const environment = {
  /**
   * Indica si estoy en producción o no.
   */
  production: false,

  /**
   * Slug del entorno.
   */
  name: "",

  /**
   * Endpoints privados
   */
  urlBackAuth: "http://localhost:8080/auth/api",
  urlBackHV: "http://localhost:8080/hojadevida/api",
  urlBackCore: "http://localhost:8080/core/api",
  urlBackAdmonPersonal: "http://localhost:8080/admonpersonal/api",
  urlBackAdmonPagos: "http://localhost:8080/admonpagos/api",
  urlBackIntegration: "http://localhost:8080/integration/api",
  urlBackSettingsDgth: "http://localhost:8080/confdgth/api",
  urlBackSivieApoyo: "http://localhost:8080/apoyo/api",
  urlBackSivieInvestigacion: "http://localhost:8080/investigacion/api",
  urlBackPdfTests: "http://localhost:3000/pdf-tests",
  urlBackPracticasYPasantias: "http://localhost:8080/practicasypasantias/api",
  urlBackAdmonAdmisiones: "http://localhost:8080/admonadmisiones/api",
  urlBackResolucionesYActas: "http://localhost:8080/resolucionesyactas/api",

  /**
   * Endpoints públicos
   */
  urlBackAuthPublic: "http://localhost:8080/auth/public/api",
  urlBackHVPublic: "http://localhost:8080/hojadevida/public/api",
  urlBackCorePublic: "http://localhost:8080/core/public/api",
  urlBackAdmonPersonalPublic: "http://localhost:8080/admonpersonal/public/api",
  urlBackAdmonPagosPublic: "http://localhost:8080/admonpagos/public/api",
  urlBackIntegrationPublic: "http://localhost:8080/integration/public/api",
  urlBackSettingsDgthPublic: "http://localhost:8080/confdgth/public/api",
  urlBackSivieApoyoPublic: "http://localhost:8080/apoyo/public/api",
  urlBackSivieInvestigacionPublic:
    "http://localhost:8080/investigacion/public/api",
  urlBackPracticasYPasantiasPublic:
    "http://localhost:8080/practicasypasantias/public/api",
  urlBackAdmonAdmisionesPublic:
    "http://localhost:8080/admonadmisiones/public/api",
  urlBackResolucionesYActasPublic:
    "http://localhost:8080/resolucionesyactas/public/api",
  /**
   * Sitekey del captcha
   */
  recaptcha: {
    siteKey: "6LcaFaQfAAAAAAbXC8Vclo9AXaDUvpUtFdiiGkEm",
  },
};
