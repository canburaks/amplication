import { GroupListRelationFilter } from "../group/GroupListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InstituteTypeListRelationFilter } from "../instituteType/InstituteTypeListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GraduationTypeWhereInput = {
  groups?: GroupListRelationFilter;
  id?: StringFilter;
  instituteTypes?: InstituteTypeListRelationFilter;
  name?: StringNullableFilter;
};
