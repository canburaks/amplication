import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InstituteListRelationFilter } from "../institute/InstituteListRelationFilter";
import { InstituteTypeListRelationFilter } from "../instituteType/InstituteTypeListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CountryWhereInput = {
  countryCode?: StringNullableFilter;
  id?: StringFilter;
  institutes?: InstituteListRelationFilter;
  instituteTypes?: InstituteTypeListRelationFilter;
  name?: StringNullableFilter;
  phoneCode?: IntNullableFilter;
};
