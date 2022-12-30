import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { GraduationTypeCreateNestedManyWithoutInstituteTypesInput } from "./GraduationTypeCreateNestedManyWithoutInstituteTypesInput";

export type InstituteTypeCreateInput = {
  country?: CountryWhereUniqueInput | null;
  graduationTypes?: GraduationTypeCreateNestedManyWithoutInstituteTypesInput;
};
