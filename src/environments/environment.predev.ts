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
  name: "predev",

  /**
   * Endpoints privados
   */
  urlBackAuth: "https://rsi.uis.edu.co/predev/auth/api",
  urlBackHV: "https://rsi.uis.edu.co/predev/hojadevida/api",
  urlBackCore: "https://rsi.uis.edu.co/predev/core/api",
  urlBackAdmonPersonal: "https://rsi.uis.edu.co/predev/admonpersonal/api",
  urlBackAdmonPagos: "https://rsi.uis.edu.co/predev/admonpagos/api",
  urlBackIntegration: "https://rsi.uis.edu.co/predev/integration/api",
  urlBackSettingsDgth: "https://rsi.uis.edu.co/predev/confdgth/api",
  urlBackSivieApoyo: "https://rsi.uis.edu.co/predev/apoyo/api",
  urlBackSivieInvestigacion: "https://rsi.uis.edu.co/predev/investigacion/api",
  urlBackPdfTests: "https://rsi.uis.edu.co/predev/report/api/pdf-tests",
  urlBackPracticasYPasantias:
    "https://rsi.uis.edu.co/predev/practicasypasantias/api",

  urlBackAdmonAdmisiones: "https://rsi.uis.edu.co/predev/admonadmisiones/api",
  urlBackResolucionesYActas:
    "https://rsi.uis.edu.co/predev/resolucionesyactas/api",

  /**
   * Endpoints públicos
   */
  urlBackAuthPublic: "https://rsi.uis.edu.co/predev/auth/public/api",
  urlBackHVPublic: "https://rsi.uis.edu.co/predev/hojadevida/public/api",
  urlBackCorePublic: "https://rsi.uis.edu.co/predev/core/public/api",
  urlBackAdmonPersonalPublic:
    "https://rsi.uis.edu.co/predev/admonpersonal/public/api",
  urlBackAdmonPagosPublic:
    "https://rsi.uis.edu.co/predev/admonpagos/public/api",
  urlBackIntegrationPublic:
    "https://rsi.uis.edu.co/predev/integration/public/api",
  urlBackSettingsDgthPublic:
    "https://rsi.uis.edu.co/predev/confdgth/public/api",
  urlBackSivieApoyoPublic: "https://rsi.uis.edu.co/predev/apoyo/public/api",
  urlBackSivieInvestigacionPublic:
    "https://rsi.uis.edu.co/predev/investigacion/public/api",
  urlBackPracticasYPasantiasPublic:
    "https://rsi.uis.edu.co/predev/practicasypasantias/public/api",
  urlBackAdmonAdmisionesPublic:
    "https://rsi.uis.edu.co/predev/admonadmisiones/public/api",
  urlBackResolucionesYActasPublic:
    "https://rsi.uis.edu.co/predev/resolucionesyactas/public/api",

  /**
   * Sitekey del captcha
   */
  recaptcha: {
    siteKey: "6LcaFaQfAAAAAAbXC8Vclo9AXaDUvpUtFdiiGkEm",
  },
};
