import { GroupListRelationFilter } from "../group/GroupListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MArketProfileWhereInput = {
  groups?: GroupListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
