import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserGroupListRelationFilter } from "../userGroup/UserGroupListRelationFilter";

export type UserWhereInput = {
  email?: StringFilter;
  emailValidated?: BooleanNullableFilter;
  firstName?: StringNullableFilter;
  gender?: "MALE" | "FEMALE" | "OTHER";
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  isDeleted?: BooleanNullableFilter;
  isSuperuser?: BooleanNullableFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  phoneCountryCode?: StringNullableFilter;
  userGroups?: UserGroupListRelationFilter;
  username?: StringFilter;
};
