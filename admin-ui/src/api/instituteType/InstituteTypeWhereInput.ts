import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { GraduationTypeListRelationFilter } from "../graduationType/GraduationTypeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type InstituteTypeWhereInput = {
  country?: CountryWhereUniqueInput;
  graduationTypes?: GraduationTypeListRelationFilter;
  id?: StringFilter;
};
