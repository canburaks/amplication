import { GraduationTypeWhereUniqueInput } from "../graduationType/GraduationTypeWhereUniqueInput";
import { InstituteWhereUniqueInput } from "../institute/InstituteWhereUniqueInput";
import { MArketProfileWhereUniqueInput } from "../mArketProfile/MArketProfileWhereUniqueInput";
import { UserGroupUpdateManyWithoutGroupsInput } from "./UserGroupUpdateManyWithoutGroupsInput";

export type GroupUpdateInput = {
  graduationType?: GraduationTypeWhereUniqueInput | null;
  institute?: InstituteWhereUniqueInput | null;
  isActive?: boolean | null;
  marketProfile?: MArketProfileWhereUniqueInput | null;
  name?: string;
  userGroups?: UserGroupUpdateManyWithoutGroupsInput;
  year?: number;
};
