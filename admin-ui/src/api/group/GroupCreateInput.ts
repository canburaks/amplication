import { GraduationTypeWhereUniqueInput } from "../graduationType/GraduationTypeWhereUniqueInput";
import { InstituteWhereUniqueInput } from "../institute/InstituteWhereUniqueInput";
import { MArketProfileWhereUniqueInput } from "../mArketProfile/MArketProfileWhereUniqueInput";
import { UserGroupCreateNestedManyWithoutGroupsInput } from "./UserGroupCreateNestedManyWithoutGroupsInput";

export type GroupCreateInput = {
  graduationType?: GraduationTypeWhereUniqueInput | null;
  institute?: InstituteWhereUniqueInput | null;
  isActive?: boolean | null;
  marketProfile?: MArketProfileWhereUniqueInput | null;
  name: string;
  userGroups?: UserGroupCreateNestedManyWithoutGroupsInput;
  year: number;
};
