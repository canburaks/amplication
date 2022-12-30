import { InstituteCreateNestedManyWithoutCountriesInput } from "./InstituteCreateNestedManyWithoutCountriesInput";
import { InstituteTypeCreateNestedManyWithoutCountriesInput } from "./InstituteTypeCreateNestedManyWithoutCountriesInput";

export type CountryCreateInput = {
  countryCode?: string | null;
  institutes?: InstituteCreateNestedManyWithoutCountriesInput;
  instituteTypes?: InstituteTypeCreateNestedManyWithoutCountriesInput;
  name?: string | null;
  phoneCode?: number | null;
};
