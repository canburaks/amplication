import { InstituteUpdateManyWithoutCountriesInput } from "./InstituteUpdateManyWithoutCountriesInput";
import { InstituteTypeUpdateManyWithoutCountriesInput } from "./InstituteTypeUpdateManyWithoutCountriesInput";

export type CountryUpdateInput = {
  countryCode?: string | null;
  institutes?: InstituteUpdateManyWithoutCountriesInput;
  instituteTypes?: InstituteTypeUpdateManyWithoutCountriesInput;
  name?: string | null;
  phoneCode?: number | null;
};
