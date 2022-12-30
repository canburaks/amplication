import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { GraduationTypeUpdateManyWithoutInstituteTypesInput } from "./GraduationTypeUpdateManyWithoutInstituteTypesInput";

export type InstituteTypeUpdateInput = {
  country?: CountryWhereUniqueInput | null;
  graduationTypes?: GraduationTypeUpdateManyWithoutInstituteTypesInput;
};
