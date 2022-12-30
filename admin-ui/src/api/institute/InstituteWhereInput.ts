import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { GroupListRelationFilter } from "../group/GroupListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type InstituteWhereInput = {
  city?: StringNullableFilter;
  country?: CountryWhereUniqueInput;
  groups?: GroupListRelationFilter;
  id?: StringFilter;
  internalId?: StringFilter;
  isPrivate?: BooleanNullableFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  street?: StringNullableFilter;
  zip?: StringNullableFilter;
};
