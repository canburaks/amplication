import { GraduationType } from "../graduationType/GraduationType";
import { Institute } from "../institute/Institute";
import { MArketProfile } from "../mArketProfile/MArketProfile";
import { UserGroup } from "../userGroup/UserGroup";

export type Group = {
  createdAt: Date;
  graduationType?: GraduationType | null;
  id: string;
  institute?: Institute | null;
  isActive: boolean | null;
  marketProfile?: MArketProfile | null;
  name: string;
  updatedAt: Date;
  userGroups?: Array<UserGroup>;
  year: number;
};
