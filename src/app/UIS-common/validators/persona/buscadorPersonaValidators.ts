import { AbstractControl } from "@angular/forms";
export class BuscadorPersonaValidators {
  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    if (value > 10000) {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      return { price_invalid: true };
    }
    return false;
  }
}
