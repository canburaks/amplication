import { GraduationTypeWhereUniqueInput } from "../graduationType/GraduationTypeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InstituteWhereUniqueInput } from "../institute/InstituteWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MArketProfileWhereUniqueInput } from "../mArketProfile/MArketProfileWhereUniqueInput";
import { UserGroupListRelationFilter } from "../userGroup/UserGroupListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type GroupWhereInput = {
  graduationType?: GraduationTypeWhereUniqueInput;
  id?: StringFilter;
  institute?: InstituteWhereUniqueInput;
  isActive?: BooleanNullableFilter;
  marketProfile?: MArketProfileWhereUniqueInput;
  name?: StringFilter;
  userGroups?: UserGroupListRelationFilter;
  year?: IntFilter;
};
