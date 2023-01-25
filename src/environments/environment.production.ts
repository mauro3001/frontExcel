/**
 * Variables de entorno del proyecto.
 */
export const environment = {
  /**
   * Indica si estoy en producción o no.
   */
  production: true,

  /**
   * Slug del entorno.
   */
  name: "",

  /**
   * Endpoints privados
   */
  urlBackAuth: "https://gestion.uis.edu.co/auth/api",
  urlBackHV: "https://gestion.uis.edu.co/hojadevida/api",
  urlBackCore: "https://gestion.uis.edu.co/core/api",
  urlBackAdmonPersonal: "https://gestion.uis.edu.co/admonpersonal/api",
  urlBackAdmonPagos: "https://gestion.uis.edu.co/admonpagos/api",
  urlBackSettingsDgth: "https://gestion.uis.edu.co/confdgth/api",
  urlBackSivieApoyo: "https://gestion.uis.edu.co/apoyo/api",
  urlBackSivieInvestigacion: "https://gestion.uis.edu.co/investigacion/api",
  urlBackPdfTests: "https://gestion.uis.edu.co/report/api/pdf-tests",
  urlBackPracticasYPasantias:
    "https://gestion.uis.edu.co/practicasypasantias/api",
  urlBackAdmonAdmisiones: "https://gestion.uis.edu.co/admonadmisiones/api",
  urlBackResolucionesYActas:
    "https://gestion.uis.edu.co/resolucionesyactas/api",

  /**
   * Endpoints públicos
   */
  urlBackAuthPublic: "https://gestion.uis.edu.co/auth/public/api",
  urlBackHVPublic: "https://gestion.uis.edu.co/hojadevida/public/api",
  urlBackCorePublic: "https://gestion.uis.edu.co/core/public/api",
  urlBackAdmonPersonalPublic:
    "https://gestion.uis.edu.co/admonpersonal/public/api",
  urlBackAdmonPagosPublic: "https://gestion.uis.edu.co/admonpagos/public/api",
  urlBackSettingsDgthPublic: "https://gestion.uis.edu.co/confdgth/public/api",
  urlBackSivieApoyoPublic: "https://gestion.uis.edu.co/apoyo/public/api",
  urlBackSivieInvestigacionPublic:
    "https://gestion.uis.edu.co/investigacion/public/api",
  urlBackPracticasYPasantiasPublic:
    "https://gestion.uis.edu.co/practicasypasantias/public/api",
  urlBackAdmonAdmisionesPublic:
    "https://gestion.uis.edu.co/admonadmisiones/public/api",
  urlBackResolucionesYActasPublic:
    "https://gestion.uis.edu.co/resolucionesyactas/public/api",

  /**
   * Sitekey del captcha
   */
  recaptcha: {
    siteKey: "6LcaFaQfAAAAAAbXC8Vclo9AXaDUvpUtFdiiGkEm",
  },
};
