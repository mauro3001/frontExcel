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
  name: "preprod",

  /**
   * Endpoints privados
   */
  urlBackAuth: "https://rsi.uis.edu.co/preprod/auth/api",
  urlBackHV: "https://rsi.uis.edu.co/preprod/hojadevida/api",
  urlBackCore: "https://rsi.uis.edu.co/preprod/core/api",
  urlBackAdmonPersonal: "https://rsi.uis.edu.co/preprod/admonpersonal/api",
  urlBackAdmonPagos: "https://rsi.uis.edu.co/preprod/admonpagos/api",
  urlBackIntegration: "https://rsi.uis.edu.co/preprod/integration/api",
  urlBackSettingsDgth: "https://rsi.uis.edu.co/preprod/confdgth/api",
  urlBackSivieApoyo: "https://rsi.uis.edu.co/preprod/apoyo/api",
  urlBackSivieInvestigacion: "https://rsi.uis.edu.co/preprod/investigacion/api",
  urlBackPdfTests: "https://rsi.uis.edu.co/preprod/report/api/pdf-tests",
  urlBackPracticasYPasantias:
    "https://rsi.uis.edu.co/preprod/practicasypasantias/api",
  urlBackAdmonAdmisiones: "https://rsi.uis.edu.co/preprod/admonadmisiones/api",
  urlBackResolucionesYActas:
    "https://rsi.uis.edu.co/preprod/resolucionesyactas/api",

  /**
   * Endpoints públicos
   */
  urlBackAuthPublic: "https://rsi.uis.edu.co/preprod/auth/public/api",
  urlBackHVPublic: "https://rsi.uis.edu.co/preprod/hojadevida/public/api",
  urlBackCorePublic: "https://rsi.uis.edu.co/preprod/core/public/api",
  urlBackAdmonPersonalPublic:
    "https://rsi.uis.edu.co/preprod/admonpersonal/public/api",
  urlBackAdmonPagosPublic:
    "https://rsi.uis.edu.co/preprod/admonpagos/public/api",
  urlBackIntegrationPublic:
    "https://rsi.uis.edu.co/preprod/integration/public/api",
  urlBackSettingsDgthPublic:
    "https://rsi.uis.edu.co/preprod/confdgth/public/api",
  urlBackSivieApoyoPublic: "https://rsi.uis.edu.co/preprod/apoyo/public/api",
  urlBackSivieInvestigacionPublic:
    "https://rsi.uis.edu.co/preprod/investigacion/public/api",
  urlBackPracticasYPasantiasPublic:
    "https://rsi.uis.edu.co/preprod/practicasypasantias/public/api",
  urlBackAdmonAdmisionesPublic:
    "https://rsi.uis.edu.co/preprod/admonadmisiones/public/api",
  urlBackResolucionesYActasPublic:
    "https://rsi.uis.edu.co/preprod/resolucionesyactas/public/api",

  /**
   * Sitekey del captcha
   */
  recaptcha: {
    siteKey: "6LcaFaQfAAAAAAbXC8Vclo9AXaDUvpUtFdiiGkEm",
  },
};
